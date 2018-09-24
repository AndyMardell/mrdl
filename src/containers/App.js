import React, { Component } from 'react'
import { withRouter } from 'react-router'
import { Switch, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import { updateAction } from '../actions'
import Wrapper from '../components/Wrapper'
import Header from './Header'
import Footer from './Footer'
import HomeContainer from './Home'
import PostContainer from './Post'
import { apiGet } from '../helpers'

class App extends Component {
  async componentDidMount () {
    const { dispatchUpdate } = this.props

    let apiDataSets = [
      'posts',
      'categories',
      'pages',
      'nav'
    ]

    for (let key of apiDataSets) {
      let response = await apiGet(key)
      if (response.ok) {
        dispatchUpdate(key, response.data)
      }
    }
  }

  render () {
    const postComponent = ({ match }) => <PostContainer slug={match.params.postslug} />
    const pageComponent = ({ match }) => <PostContainer slug={match.params.pageslug} page />

    return (
      <div>
        <Wrapper>
          <Header />
          <Switch>
            <Route exact path='/' component={HomeContainer} />
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
