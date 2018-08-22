import React from 'react'
import Styled from 'styled-components'

const Container = Styled.div`
  text-align: center;
  max-width: 500px;
  padding: 10%;
  margin: 0 auto;
  font-size: 2em;
  margin-bottom: 1em;
`

const Hero = () => (
  <Container>
    Notes and stuff of a <br />developer from <strong>Portsmouth</strong>
  </Container>
)

export default Hero
