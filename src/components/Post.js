import React from 'react'
import PostTitle from './PostTitle'
import PostContent from './PostContent'

const Post = ({data}) => {
  return (
    <div>
      <PostTitle content={data.title.rendered} />
      <PostContent content={data.excerpt.rendered} />
    </div>
  )
}

export default Post
