import React, { Component } from 'react'
import Styled from 'styled-components'
import Logo from '../components/Logo'
import Nav from '../components/Nav'
import Menu from '../components/Menu'

const Navbar = Styled.div`
  display: flex;
  justify-content: space-between;
`

class Header extends Component {
  constructor (props) {
    super(props)
    this.state = {
      menu: false
    }
  }

  toggleMenu (e) {
    e.preventDefault()
    this.setState({
      menu: !this.state.menu
    })
  }

  render () {
    return (
      <Navbar>
        <Logo />
        <Nav toggleMenu={this.toggleMenu.bind(this)} />
        {this.state.menu && <Menu toggleMenu={this.toggleMenu.bind(this)} /> }
      </Navbar>
    )
  }
}

export default Header
