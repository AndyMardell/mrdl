import React, { Component } from 'react'

class PostSingle extends Component {
  constructor (props) {
    super(props)

    this.state = {
      post: null
    }
  }

  componentDidMount () {
    const { slug } = this.props

    fetch(process.env.REACT_APP_CMS_URL + '/wp-json/wp/v2/posts?slug=' + slug)
      .then(response => response.json())
      .then(response => {
        // TODO: 404
        if (!response.length) return false

        this.setState({
          post: response[0]
        })
      })
  }

  render () {
    if (!this.state.post) return null // TODO: Loading
    return (
      <div>
        {this.state.post.title.rendered}
      </div>
    )
  }
}

export default PostSingle
