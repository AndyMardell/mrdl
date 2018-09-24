import React, { Component } from 'react'
import { apiGet } from '../helpers'
import Styled from 'styled-components'

const Image = Styled.img`
  max-width: 100%;
  height: auto;
  margin-bottom: 24px;
`

class PostThumb extends Component {
  constructor (props) {
    super(props)
    this.state = {
      image: null
    }
  }

  async componentDidMount () {
    const { id } = this.props
    let response = await apiGet('media', id)

    if (response.ok) {
      !this.isCancelled && this.setState({
        image: response.data.source_url
      })
    }
  }

  componentWillUnmount () {
    this.isCancelled = true
  }

  render () {
    const { image } = this.state
    const { alt } = this.props

    if (!image) {
      return null
    }

    return (
      <Image src={image} alt={alt} />
    )
  }
}

export default PostThumb
