import React, { Component } from 'react'
import Loading from '../components/Loading'
import Page from '../components/Page'
import { apiGet } from '../helpers'

class PageContainer extends Component {
  constructor (props) {
    super(props)

    this.state = {
      page: null,
      notfound: false
    }
  }

  async componentDidMount () {
    const { slug } = this.props
    let page = await apiGet('pages', slug)

    if (!page.ok) {
      !this.isCancelled && this.setState({
        notfound: true
      })
    } else {
      !this.isCancelled && this.setState({
        page: page.data[0]
      })
    }
  }

  componentWillUnmount () {
    this.isCancelled = true
  }

  render () {
    const { page, notfound } = this.state

    if (notfound) return 'Page not found'

    if (!page) return <Loading />

    return (
      <Page data={page} />
    )
  }
}

export default PageContainer
