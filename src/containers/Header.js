import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
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
    if (!e.target.href) e.preventDefault()
    this.setState({
      menu: !this.state.menu
    })
  }

  render () {
    const { pages } = this.props

    const list = pages.map((page) =>
      <Link key={page.id} to={'/' + page.slug} onClick={this.toggleMenu.bind(this)}>{page.title.rendered}</Link>
    )

    return (
      <Navbar>
        <Logo />
        <Nav toggleMenu={this.toggleMenu.bind(this)} />

        {this.state.menu &&
          <Menu toggleMenu={this.toggleMenu.bind(this)}>
            <Link to='/' onClick={this.toggleMenu.bind(this)}>Home</Link>
            { list }
          </Menu>
        }
      </Navbar>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    pages: state.cms.pages
  }
}

export default connect(
  mapStateToProps
)(Header)
