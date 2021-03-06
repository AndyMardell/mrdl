import React, { Component } from 'react'
import { connect } from 'react-redux'
import Loading from '../components/Loading'
import Page from '../components/Page'
import Post from '../components/Post'
import NotFound from '../components/NotFound'
import { apiGet, getCategoryDetails } from '../helpers'
import Helmet from 'react-helmet'
import striptags from 'striptags'

class PostContainer extends Component {
  constructor (props) {
    super(props)

    this.state = {
      data: null,
      notfound: false
    }
  }

  async componentDidMount () {
    const { slug, page } = this.props

    let query = page ? 'pages' : 'posts'
    let response = await apiGet(query, slug)

    if (!response.ok) {
      !this.isCancelled && this.setState({
        notfound: true
      })
    } else {
      !this.isCancelled && this.setState({
        data: response.data[0]
      })
    }
  }

  componentWillUnmount () {
    this.isCancelled = true
  }

  render () {
    const { data, notfound } = this.state
    const { page, availableCategories } = this.props

    if (notfound) return <NotFound />

    if (!data) return <Loading />

    if (page) {
      return (
        <div>
          <Helmet>
            <title>mrdl: {data.title.rendered}</title>
          </Helmet>

          <Page data={data} />
        </div>
      )
    }

    return (
      <div>
        <Helmet>
          <title>mrdl: {data.title.rendered}</title>
          <meta name='description' content={striptags(data.excerpt.rendered)} />
        </Helmet>

        <Post data={data} categories={getCategoryDetails(data.categories, availableCategories)} single />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    availableCategories: state.cms.categories
  }
}

export default connect(
  mapStateToProps
)(PostContainer)
