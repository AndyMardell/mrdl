import React, { Component } from 'react'
import { withRouter } from 'react-router'
import { Switch, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import { updatePostsAction, updateCategoriesAction } from '../actions'
import Wrapper from '../components/Wrapper'
import Header from './Header'
import Footer from './Footer'
import HomeContainer from './Home'
import PostContainer from './PostSingle'
import PageContainer from './Page'

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
    const pageComponent = ({ match }) => <PageContainer slug={match.params.pageslug} />

    return (
      <div>
        <Wrapper>
          <Header />
          <Switch>
            <Route exact path='/' component={homeComponent} />
            <Route exact path='/post/:postslug' component={postComponent} />
            <Route exact path='/:pageslug' component={pageComponent} />
          </Switch>
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
