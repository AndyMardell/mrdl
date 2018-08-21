import React, { Component } from 'react'
import Styled from 'styled-components'

const Container = Styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  grid-gap: 50px;
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
