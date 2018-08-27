import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import HomeContainer from './Home'
import PostContainer from './PostSingle'

class Page extends Component {
  render () {
    const homeComponent = () => <HomeContainer />
    const postComponent = ({ match }) => <PostContainer slug={match.params.postslug} />

    return (
      <Switch>
        <Route exact path='/' component={homeComponent} />
        <Route exact path='/post/:postslug' component={postComponent} />
      </Switch>
    )
  }
}

export default Page
