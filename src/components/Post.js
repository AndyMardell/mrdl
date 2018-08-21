import React from 'react'
import PostCategory from './PostCategory'
import PostTitle from './PostTitle'
import PostContent from './PostContent'
import Styled from 'styled-components'

const PostWrapper = Styled.div`
`

const Post = ({data}) => (
  <PostWrapper>
    <PostCategory content={data.categories} />
    <PostTitle content={data.title.rendered} />
    <PostContent content={data.excerpt.rendered} />
  </PostWrapper>
)

export default Post
