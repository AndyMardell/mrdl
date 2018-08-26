import React, { Component } from 'react'
import Styled from 'styled-components'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faTwitter, faFacebook } from '@fortawesome/free-brands-svg-icons'

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
    library.add(faGithub, faTwitter, faFacebook)
    return (
      <Container>
        <Link href='#' target='_blank'><FontAwesomeIcon icon={['fab', 'github']} /></Link>
        <Link href='#' target='_blank'><FontAwesomeIcon icon={['fab', 'twitter']} /></Link>
        <Link href='#' target='_blank'><FontAwesomeIcon icon={['fab', 'facebook']} /></Link>
      </Container>
    )
  }
}

export default Footer
