import React from 'react'
import Styled from 'styled-components'
import ReactLoading from 'react-loading'

const Container = Styled.div`
  padding-bottom: 50px;

  ${({ absolute }) => absolute && `
    background: #fff;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    padding-bottom: 0;
    z-index: 9999;
    display: flex;
    align-items: center;
  `}
`

const Loader = Styled(ReactLoading)`
  margin: 0 auto;
`

const Loading = ({ absolute }) => (
  <Container absolute={absolute}>
    <Loader type='spin' color='#000000' height={50} width={50} />
  </Container>
)

export default Loading
