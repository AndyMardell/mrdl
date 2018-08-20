import React, { Component } from 'react'
import Wrapper from '../components/Wrapper'
import HeaderContainer from './Header'
import Hero from '../components/Hero'
import PostsContainer from './Posts'

class App extends Component {
  render () {
    return (
      <Wrapper>
        <HeaderContainer />
        <Hero />
        <PostsContainer />
      </Wrapper>
    )
  }
}

export default App
