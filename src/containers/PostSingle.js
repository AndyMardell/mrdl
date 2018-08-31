import React, { Component } from 'react'
import { connect } from 'react-redux'
import Loading from '../components/Loading'
import Post from '../components/Post'
import { getPost, getCategoryDetails } from '../helpers'

class PostSingle extends Component {
  constructor (props) {
    super(props)

    this.state = {
      post: null
    }
  }

  componentDidMount () {
    const { slug } = this.props

    getPost(slug)
      .then(response => {
        if (!response) return false // TODO: 404

        !this.isCancelled && this.setState({
          post: response
        })
      })
  }

  componentWillUnmount () {
    this.isCancelled = true
  }

  render () {
    const { post } = this.state

    if (!post) return <Loading />

    return (
      <Post data={post} categories={getCategoryDetails(post.categories, this.props.categories)} single />
    )
  }
}

const mapStateToProps = (state) => {
  return {
    categories: state.cms.categories
  }
}

export default connect(
  mapStateToProps
)(PostSingle)
