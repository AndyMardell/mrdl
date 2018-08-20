import React, { Component } from 'react'
import Wrapper from '../components/Wrapper'
import Header from './Header'
import Hero from '../components/Hero'
import Posts from './Posts'

class App extends Component {
  render () {
    return (
      <Wrapper>
        <Header />
        <Hero />
        <Posts />
      </Wrapper>
    )
  }
}

export default App
