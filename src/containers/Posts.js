import React, { Component } from 'react'
import { connect } from 'react-redux'
import { updatePostsAction } from '../actions'

class Posts extends Component {
  componentDidMount () {
    const {dispatchUpdatePosts} = this.props
    fetch('http://admin.mardell.test/wp-json/wp/v2/posts')
      .then(response => response.json())
      .then(response => {
        dispatchUpdatePosts(response)
      })
  }
  render () {
    return (
      <div>Posts</div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    posts: state.posts
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    dispatchUpdatePosts: (posts) => dispatch(updatePostsAction(posts))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Posts)
