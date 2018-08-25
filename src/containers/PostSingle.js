import React, { Component } from 'react'
import { connect } from 'react-redux'
import Post from '../components/Post'

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
        if (!response.length) return false // TODO: 404

        !this.isCancelled && this.setState({
          post: response[0]
        })
      })
  }

  componentWillUnmount () {
    this.isCancelled = true
  }

  // TODO: DRY
  getCategories (ids) {
    console.log(this.props.categories)

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
    const { post } = this.state

    if (!post) return null // TODO: Loading

    console.log(post)

    return (
      <Post data={post} categories={this.getCategories(post.categories)} single />
    )
  }
}

const mapStateToProps = (state) => {
  return {
    categories: state.cms.categories
  }
}

export default connect(
  mapStateToProps
)(PostSingle)
