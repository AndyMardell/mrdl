import React, { Component } from 'react'
import Styled from 'styled-components'

const Container = Styled.div`
  background: #fff;
  box-shadow: 0 20px 20px 0 rgba(0, 0, 0, 0.1);
  border-top: 3px solid #232323;
  padding: 5%;
  margin: 5%;
`

class Wrapper extends Component {
  render () {
    return (
      <Container>
        { this.props.children }
      </Container>
    )
  }
}

export default Wrapper
