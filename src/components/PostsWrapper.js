import React, { Component } from 'react'
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

class PostsWrapper extends Component {
  render () {
    return (
      <Container>
        { this.props.children }
      </Container>
    )
  }
}

export default PostsWrapper
