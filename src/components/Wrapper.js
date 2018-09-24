import React from 'react'
import Styled from 'styled-components'

const Container = Styled.div`
  background: #fff;
  border-top: 5px solid #232323;
  padding: 20px;

  @media only screen and (min-width: 768px) {
    padding: 60px;
    margin: 50px 60px;
    box-shadow: 0 20px 20px 0 rgba(0, 0, 0, 0.1);
  }
`

const Wrapper = ({children}) => (
  <Container>
    { children }
  </Container>
)

export default Wrapper
