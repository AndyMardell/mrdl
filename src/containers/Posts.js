import React, { Component } from 'react'

class Posts extends Component {
  componentDidMount () {
    fetch('http://admin.mardell.test/wp-json/wp/v2/posts')
      .then(response => response.json())
      .then(response => {
        console.log(response)
      })
  }
  render () {
    return (
      <div>Posts</div>
    )
  }
}

export default Posts
