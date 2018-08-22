import React from 'react'
import PostCategory from './PostCategory'
import PostTitle from './PostTitle'
import PostContent from './PostContent'
import PostMore from './PostMore'
import Styled from 'styled-components'

const PostWrapper = Styled.div`
`

const Post = ({data, categories}) => (
  <PostWrapper>
    <PostCategory content={categories} />
    <PostTitle content={data.title.rendered} />
    <PostContent content={data.excerpt.rendered} />
    <PostMore slug={data.slug} />
  </PostWrapper>
)

export default Post
