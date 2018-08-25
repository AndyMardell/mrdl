import React, { Component } from 'react'
import { connect } from 'react-redux'
import PostsWrapper from '../components/PostsWrapper'
import Post from '../components/Post'

class PostsContainer extends Component {
  // TODO: DRY
  getCategories (ids) {
    const {categories} = this.props
    const arr = []

    for (let id of ids) {
      for (let category of categories) {
        if (id === category.id) {
          arr.push({
            id: category.id,
            name: category.name,
            slug: category.slug
          })
        }
      }
    }

    return arr
  }

  render () {
    const {posts} = this.props

    console.log(posts) // tmp

    if (!posts) return null // loading

    const items = posts.map((item, i) =>
      <Post key={i} data={item} categories={this.getCategories(item.categories)} />
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
