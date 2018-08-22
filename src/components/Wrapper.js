import React, { Component } from 'react'
import Styled from 'styled-components'

const Container = Styled.div`
  background: #fff;
  border-top: 5px solid #232323;
  padding: 20px;

  @media only screen and (min-width: 768px) {
    padding: 60px;
    margin: 60px 60px 70px;
    box-shadow: 0 20px 20px 0 rgba(0, 0, 0, 0.1);
  }
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
