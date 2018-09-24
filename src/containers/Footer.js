import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Styled from 'styled-components'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons'

const Container = Styled.div`
  text-align: center;
  font-size: 1.3em;
  margin-bottom: 60px;
`

const IconLink = Styled.a`
  opacity: 0.3;
  margin: 0 7px;
  transition: opacity 250ms ease-in-out;

  &:hover {
    opacity: 1;
  }
`

const TextLinks = Styled.div`
  display: block;
  
  a {
    font-size: 12px;
    opacity: 0.3;

    &:hover {
      opacity: 1;
    }
  }
`

class Footer extends Component {
  render () {
    library.add(faGithub, faTwitter, faInstagram)
    return (
      <Container>
        <IconLink href='https://github.com/AndyMardell' target='_blank'><FontAwesomeIcon icon={['fab', 'github']} /></IconLink>
        <IconLink href='https://twitter.com/AndyMardell' target='_blank'><FontAwesomeIcon icon={['fab', 'twitter']} /></IconLink>
        <IconLink href='https://instagram.com/AndyMardell' target='_blank'><FontAwesomeIcon icon={['fab', 'instagram']} /></IconLink>
        <TextLinks>
          <Link to='privacy'>Privacy</Link>
        </TextLinks>
      </Container>
    )
  }
}

export default Footer
