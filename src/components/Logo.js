import React from 'react'
import Styled from 'styled-components'

const Mrdl = Styled.svg`
  &:hover,
  &:focus {
    cursor: pointer;
    
    #background {
      fill: #232323;
    }

    #main {
      fill: #fff;
    }
  }
`

const Logo = () => (
  <Mrdl width='102px' height='46px' viewBox='0 0 102 46' version='1.1' xmlns='http://www.w3.org/2000/svg'>
    <title>Mrdl:</title>
    <desc>Andy Mardell Logo</desc>
    <g id='container' stroke='none' strokeWidth='1' fill='none' fillRule='evenodd'>
      <g id='artboard' transform='translate(-154.000000, -152.000000)'>
        <g id='logo' transform='translate(154.000000, 152.000000)'>
          <rect id='background' fill='#fff' stroke='#232323' strokeWidth='2' x='1' y='1' width='100' height='44' />
          <g id='main' transform='translate(24.000000, 11.000000)' fill='#232323' fontFamily='RobotoMono-Regular, Roboto Mono' fontSize='22' fontWeight='normal'>
            <text id='mrdl' letterSpacing='-1.08865952'>
              <tspan x='0.54604435' y='20'>mrdl</tspan>
            </text>
            <text id='colon'>
              <tspan x='46.7978516' y='20'>:</tspan>
            </text>
          </g>
        </g>
      </g>
    </g>
  </Mrdl>
)

export default Logo
