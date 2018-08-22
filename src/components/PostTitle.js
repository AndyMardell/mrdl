import React from 'react'
import Styled from 'styled-components'

const Heading = Styled.h3`
  font-size: 1.4em;
  line-height: 1.5;
  margin-top: 0.5em;
`

const Link = Styled.a`
  color: inherit;
  text-decoration: none;

  &:hover,
  &:focus {
    background: #000;
    color: #fff;
  }
`

const PostTitle = ({content, slug}) => {
  const url = '/post/' + slug

  return (
    <Heading>
      <Link href={url}>{content}</Link>
    </Heading>
  )
}

export default PostTitle
