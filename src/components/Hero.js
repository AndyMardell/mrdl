import React from 'react'
import Styled from 'styled-components'

const Container = Styled.div`
  font-family: 'Merriweather', serif;
  font-weight: 300;
  text-align: center;
  max-width: 500px;
  padding: 10%;
  margin: 0 auto;
  font-size: 2em;
  margin-bottom: 2em;
`

// const Highlight = Styled.span`
//   background: #232323;
//   color: #fff;
// `

const Hero = () => (
  <Container>
    Developer from <strong>Portsmouth</strong> trying to survive
  </Container>
)

export default Hero
