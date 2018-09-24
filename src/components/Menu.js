import React, { Component } from 'react'
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
  background: rgba(35, 35, 35, 0.98);

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

class Menu extends Component {
  render () {
    library.add(faTimes)
    return (
      <Container>
        <a className='close' href='#close' onClick={this.props.toggleMenu}><FontAwesomeIcon icon='times' /></a>
        <MenuContainer>
          { this.props.children }
        </MenuContainer>
      </Container>
    )
  }
}

export default Menu
