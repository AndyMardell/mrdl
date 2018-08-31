import React, { Component } from 'react'
import { connect } from 'react-redux'
import Loading from '../components/Loading'
import Post from '../components/Post'
import { apiGet, getCategoryDetails } from '../helpers'

class PostSingle extends Component {
  constructor (props) {
    super(props)

    this.state = {
      post: null,
      notfound: false
    }
  }

  async componentDidMount () {
    const { slug } = this.props
    let post = await apiGet('posts', slug)

    if (!post.ok) {
      !this.isCancelled && this.setState({
        notfound: true
      })
    } else {
      !this.isCancelled && this.setState({
        post: post.data[0]
      })
    }
  }

  componentWillUnmount () {
    this.isCancelled = true
  }

  render () {
    const { post, notfound } = this.state

    if (notfound) return 'Post not found'

    if (!post) return <Loading />

    return (
      <Post data={post} categories={getCategoryDetails(post.categories, this.props.categories)} single />
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
