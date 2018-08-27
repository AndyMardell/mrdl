import React, { Component } from 'react'
import Styled from 'styled-components'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons'

const Container = Styled.div`
  text-align: center;
  font-size: 1.8em;
  margin-bottom: 60px;
`

const Link = Styled.a`
  opacity: 0.3;
  margin: 0 7px;
  transition: opacity 250ms ease-in-out;

  &:hover {
    opacity: 1;
  }
`

class Footer extends Component {
  render () {
    library.add(faGithub, faTwitter, faInstagram)
    return (
      <Container>
        <Link href='https://github.com/AndyMardell' target='_blank'><FontAwesomeIcon icon={['fab', 'github']} /></Link>
        <Link href='https://twitter.com/AndyMardell' target='_blank'><FontAwesomeIcon icon={['fab', 'twitter']} /></Link>
        <Link href='https://instagram.com/AndyMardell' target='_blank'><FontAwesomeIcon icon={['fab', 'instagram']} /></Link>
      </Container>
    )
  }
}

export default Footer
