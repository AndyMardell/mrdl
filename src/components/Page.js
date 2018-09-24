import React from 'react'
import PostTitle from './PostTitle'
import PostContent from './PostContent'
import Styled from 'styled-components'

const PageWrapper = Styled.div`
`

const Post = ({ data }) => (
  <PageWrapper className='page narrow padding-top-small padding-bottom-small'>
    <PostTitle content={data.title.rendered} single />
    <PostContent content={data.content.rendered} />
  </PageWrapper>
)

export default Post
