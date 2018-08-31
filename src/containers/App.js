import React, { Component } from 'react'
import { withRouter } from 'react-router'
import { Switch, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import { updateAction } from '../actions'
import Wrapper from '../components/Wrapper'
import Header from './Header'
import Footer from './Footer'
import HomeContainer from './Home'
import PostContainer from './PostSingle'
import PageContainer from './Page'
import { getPosts, getCategories, getPages, getNav } from '../helpers'

class App extends Component {
  async componentDidMount () {
    const { dispatchUpdate } = this.props

    let posts = await getPosts()
    if (posts.ok) {
      dispatchUpdate('posts', posts.data)
    }

    let categories = await getCategories()
    if (categories.ok) {
      dispatchUpdate('categories', categories.data)
    }

    let pages = await getPages()
    if (pages.ok) {
      dispatchUpdate('pages', pages.data)
    }

    let nav = await getNav()
    if (nav.ok) {
      dispatchUpdate('nav', nav.data)
    }
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
    dispatchUpdate: (type, data) => dispatch(updateAction(type, data))
  }
}

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(App))
