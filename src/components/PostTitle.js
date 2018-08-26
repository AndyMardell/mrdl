import React from 'react'
import Styled from 'styled-components'

const Heading1 = Styled.h1`
  font-size: 2em;
  line-height: 1.5;
  margin-top: 0;
`

const Heading3 = Styled.h3`
  font-size: 1.4em;
  line-height: 1.4;
  margin-top: 0.2em;
  margin-bottom: 0;
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

const PostTitle = ({content, slug, single}) => {
  const url = '/post/' + slug
  const linkComponent = <Link href={url}>{content}</Link>

  return (
    <div>
      {single ? <Heading1>{content}</Heading1> : <Heading3>{linkComponent}</Heading3>}
    </div>
  )
}

export default PostTitle
