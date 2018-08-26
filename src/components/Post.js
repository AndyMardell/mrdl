import React from 'react'
import PostCategory from './PostCategory'
import PostTitle from './PostTitle'
import PostContent from './PostContent'
import PostMore from './PostMore'
import Styled from 'styled-components'

const PostWrapper = Styled.div`
`

const Post = ({data, categories, single}) => {
  const content = single ? data.content.rendered : data.excerpt.rendered
  const className = single ? 'post-single narrow padding-top-small padding-bottom-small' : 'post-archive'

  return (
    <PostWrapper className={className}>
      <PostCategory content={categories} />
      <PostTitle content={data.title.rendered} slug={data.slug} single={single} />
      <PostContent content={content} />
      {!single &&
        <PostMore slug={data.slug} />
      }
    </PostWrapper>
  )
}

export default Post
