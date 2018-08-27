import React, { Component } from 'react'
import { connect } from 'react-redux'
import Post from '../components/Post'
import { getPost, getCategories } from '../helpers'

class PostSingle extends Component {
  constructor (props) {
    super(props)

    this.state = {
      post: null
    }
  }

  componentDidMount () {
    const { slug } = this.props

    getPost(slug)
      .then(response => {
        if (!response) return false // TODO: 404

        !this.isCancelled && this.setState({
          post: response
        })
      })
  }

  componentWillUnmount () {
    this.isCancelled = true
  }

  render () {
    const { post } = this.state

    if (!post) return null // TODO: Loading

    return (
      <Post data={post} categories={getCategories(post.categories, this.props.categories)} single />
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
