import React from 'react'
import Styled from 'styled-components'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

const Container = Styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  text-align: center;
  background: #232323;

  a.close {
    position: absolute;
    top: 1em;
    right: 2em;
    text-decoration: none;
    font-size: 2em;
    color: #fff;
    z-index: 999;
  }
`

const MenuContainer = Styled.div`
  display: flex;
  flex-wrap: wrap;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  align-content: center;
  z-index: 998;

  a {
    display: block;
    width: 100%;
    align-self: center;
    color: #fff;
    text-decoration: none;
    font-size: 2em;

    &:hover,
    &:focus {
      text-decoration: underline;
    }
  }
`

const Menu = ({toggleMenu}) => {
  library.add(faTimes)
  return (
    <Container>
      <a className='close' href='#close' onClick={toggleMenu}><FontAwesomeIcon icon='times' /></a>
      <MenuContainer>
        <a href='/'>Posts</a>
        <a href='/about'>About</a>
        <a href='/contact'>Contact</a>
      </MenuContainer>
    </Container>
  )
}

export default Menu
