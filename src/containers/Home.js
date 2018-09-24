import React from 'react'
import Hero from '../components/Hero'
import PostsContainer from './Posts'
import Helmet from 'react-helmet'

const Home = () => (
  <div>
    <Helmet>
      <title>mrdl: developer from Portsmouth</title>
      <meta name='description' content='Notes and ramblings of a Southsea-based developer trying to survive.' />
    </Helmet>

    <Hero />
    <PostsContainer />
  </div>
)

export default Home
