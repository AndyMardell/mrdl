import React from 'react'
import Styled from 'styled-components'

const Heading = Styled.h3`
  font-size: 1.4em;
  line-height: 1.5;
  margin-top: 0.5em;
`

const PostTitle = ({content}) => (
  <Heading>{content}</Heading>
)

export default PostTitle
