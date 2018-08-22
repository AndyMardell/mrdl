import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import HomeContainer from './Home'
import PostContainer from './PostSingle'

class App extends Component {
  render () {
    const homeComponent = () => <HomeContainer />
    const postComponent = ({ match }) => <PostContainer slug={match.params.postslug} />

    return (
      <Router>
        <div>
          <Route exact path='/' component={homeComponent} />
          <Route exact path='/post/:postslug' component={postComponent} />
        </div>
      </Router>
    )
  }
}

export default App
