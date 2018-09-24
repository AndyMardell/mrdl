import React from 'react'
import Styled from 'styled-components'
import Helmet from 'react-helmet'

const Container = Styled.div`
  text-align: center;
  padding: 50px 0;
`

const NotFound = () => (
  <Container className='narrow padding-top padding-bottom'>
    <Helmet>
      <title>Page not found</title>
      <meta name='robots' content='noindex' />
    </Helmet>

    <h1>Not all who wander are lost</h1>
    But I'm pretty sure you're lost. How did you even get here? There's nothing here.
  </Container>
)

export default NotFound
