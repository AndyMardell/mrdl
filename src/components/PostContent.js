import React from 'react'
import Parser from 'html-react-parser'
import Styled from 'styled-components'

const Content = Styled.div`
    img {
        max-width: 100%;
        height: auto;
    }
`

const PostContent = ({ content }) => (
  <Content>
    {Parser(content)}
  </Content>
)

export default PostContent
