import React from 'react'
import Styled from 'styled-components'
import burger from '../burger.svg'

const Link = Styled.a`
  padding: 11px;
  height: 24px;
`

const Nav = ({ toggleMenu }) => (
  <Link href='#' onClick={toggleMenu}>
    <img src={burger} alt='nav' />
  </Link>
)

export default Nav
