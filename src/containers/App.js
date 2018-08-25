import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import { updatePostsAction, updateCategoriesAction } from '../actions'
import Wrapper from '../components/Wrapper'
import Header from './Header'
import HomeContainer from './Home'
import PostContainer from './PostSingle'

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
    const homeComponent = () => <HomeContainer />
    const postComponent = ({ match }) => <PostContainer slug={match.params.postslug} />

    return (
      <Wrapper>
        <Header />
        <Router>
          <div>
            <Route exact path='/' component={homeComponent} />
            <Route exact path='/post/:postslug' component={postComponent} />
          </div>
        </Router>
      </Wrapper>
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
)(App)
