import React, { Component } from 'react'
import { connect } from 'react-redux'
import { updatePostsAction } from '../actions'
import Posts from '../components/Posts'

class PostsContainer extends Component {
  componentDidMount () {
    const {dispatchUpdatePosts} = this.props
    fetch(process.env.REACT_APP_CMS_URL + '/wp-json/wp/v2/posts')
      .then(response => response.json())
      .then(response => {
        dispatchUpdatePosts(response)
      })
  }

  render () {
    const {posts} = this.props
    console.log(posts) // tmp
    if (!posts) return null // loading
    return (
      <Posts posts={posts} />
    )
  }
}

const mapStateToProps = (state) => {
  return {
    posts: state.cms.posts
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
)(PostsContainer)
