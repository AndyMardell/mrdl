import React, { Component } from 'react'
import { connect } from 'react-redux'
import Loading from '../components/Loading'
import PostsWrapper from '../components/PostsWrapper'
import Post from '../components/Post'
import { getCategoryDetails } from '../helpers'

class PostsContainer extends Component {
  render () {
    const {posts, categories} = this.props

    if (!posts || !posts.length) {
      return <Loading />
    }

    const items = posts.map((item, i) =>
      <Post key={i} data={item} categories={getCategoryDetails(item.categories, categories)} />
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
