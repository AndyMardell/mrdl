import React, { Component } from 'react'
import Hero from '../components/Hero'
import PostsContainer from './Posts'

class Home extends Component {
  render () {
    return (
      <div>
        <Hero />
        <PostsContainer />
      </div>
    )
  }
}

export default Home
