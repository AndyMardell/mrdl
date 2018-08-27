import React, { Component } from 'react'
import { connect } from 'react-redux'
import PostsWrapper from '../components/PostsWrapper'
import Post from '../components/Post'
import { getCategories } from '../helpers'

class PostsContainer extends Component {
  render () {
    const {posts} = this.props

    if (!posts) return null // loading

    const items = posts.map((item, i) =>
      <Post key={i} data={item} categories={getCategories(item.categories, this.props.categories)} />
    )

    return (
      <PostsWrapper>
        {items}
      </PostsWrapper>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    posts: state.cms.posts,
    categories: state.cms.categories
  }
}

export default connect(
  mapStateToProps
)(PostsContainer)
