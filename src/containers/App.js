import React, { Component } from 'react'
import { withRouter } from 'react-router'
import { connect } from 'react-redux'
import { updatePostsAction, updateCategoriesAction } from '../actions'
import Wrapper from '../components/Wrapper'
import Header from './Header'
import Page from './Page'
import Footer from './Footer'

class App extends Component {
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
    return (
      <div>
        <Wrapper>
          <Header />
          <Page />
        </Wrapper>
        <Footer />
      </div>
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

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(App))
