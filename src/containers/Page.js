import React, { Component } from 'react'
import Loading from '../components/Loading'
import Page from '../components/Page'
import { getPage } from '../helpers'

class PageContainer extends Component {
  constructor (props) {
    super(props)

    this.state = {
      page: null
    }
  }

  componentDidMount () {
    const { slug } = this.props

    getPage(slug)
      .then(response => {
        if (!response) return false // TODO: 404

        !this.isCancelled && this.setState({
          page: response
        })
      })
  }

  componentWillUnmount () {
    this.isCancelled = true
  }

  render () {
    const { page } = this.state

    if (!page) return <Loading />

    return (
      <Page data={page} />
    )
  }
}

export default PageContainer
