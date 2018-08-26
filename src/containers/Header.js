import React, { Component } from 'react'
import Styled from 'styled-components'
import Logo from '../components/Logo'
import Nav from '../components/Nav'

const Navbar = Styled.div`
  display: flex;
  justify-content: space-between;
`

class Header extends Component {
  render () {
    return (
      <Navbar>
        <Logo />
        <Nav />
      </Navbar>
    )
  }
}

export default Header
