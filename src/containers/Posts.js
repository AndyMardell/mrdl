import React, { Component } from 'react'
import { connect } from 'react-redux'
import { updatePostsAction, updateCategoriesAction } from '../actions'
import Posts from '../components/Posts'

class PostsContainer extends Component {
  componentDidMount () {
    const {dispatchUpdatePosts, dispatchUpdateCategories} = this.props

    fetch(process.env.REACT_APP_CMS_URL + '/wp-json/wp/v2/posts')
      .then(response => response.json())
      .then(response => {
        dispatchUpdatePosts(response)
      })

    fetch(process.env.REACT_APP_CMS_URL + '/wp-json/wp/v2/categories')
      .then(response => response.json())
      .then(response => {
        dispatchUpdateCategories(response)
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
    posts: state.cms.posts,
    categories: state.cms.categories
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    dispatchUpdatePosts: (posts) => dispatch(updatePostsAction(posts)),
    dispatchUpdateCategories: (categories) => dispatch(updateCategoriesAction(categories))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostsContainer)
