import React from 'react'
import PostTitle from './PostTitle'
import PostContent from './PostContent'
import Styled from 'styled-components'

const PostWrapper = Styled.div`
  margin: 40px;

  &:nth-child(3n+1) {
    margin-left: 0;
  }
  &:nth-child(3n) {
    margin-right: 0;
  }
`

const Post = ({data}) => (
  <PostWrapper>
    <PostTitle content={data.title.rendered} />
    <PostContent content={data.excerpt.rendered} />
  </PostWrapper>
)

export default Post
