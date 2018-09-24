import React from 'react'
import Styled from 'styled-components'

const Container = Styled.div`
  display: grid;
  grid-template-columns: auto;
  grid-gap: 50px;

  @media only screen and (min-width: 700px) {
    grid-template-columns: auto auto;
  }

  @media only screen and (min-width: 1000px) {
    grid-template-columns: auto auto auto;
  }
`

const PostsWrapper = ({ children }) => (
  <Container>
    { children }
  </Container>
)

export default PostsWrapper
