import React, { Component } from 'react'

class PostSingle extends Component {
  render () {
    const { slug } = this.props

    return (
      <div>
        {slug}
      </div>
    )
  }
}

export default PostSingle
