import React from 'react'
import Styled from 'styled-components'

const Container = Styled.div`
  text-align: center;
  max-width: 450px;
  padding: 10%;
  margin: 0 auto;
  font-size: 40px;
`

const Hero = () => (
  <Container>
    Notes and stuff of a developer from Portsmouth
  </Container>
)

export default Hero
