import React from 'react'
import Styled from 'styled-components'

const LinkContainer = Styled.p`
  margin-top: 1.5em;
`

const Link = Styled.a`
  border: 2px solid #000;
  color: #000;
  text-decoration: none;
  font-weight: 500;
  font-size: .8em;
  padding: 8px 13px;

  &:hover,
  &:focus {
    border: 2px solid #000;
    background-color: #000;
    color: #fff;
  }
`

const PostMore = ({slug}) => {
  const url = '/post/' + slug

  return (
    <LinkContainer>
      <Link href={url}>read more</Link>
    </LinkContainer>
  )
}

export default PostMore
