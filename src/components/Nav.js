import React from 'react'
import Styled from 'styled-components'
import burger from '../burger.svg'

const Link = Styled.a`
  padding: 11px;
  height: 24px;
`

const Nav = () => (
  <Link href='#'>
    <img src={burger} alt='nav' />
  </Link>
)

export default Nav
