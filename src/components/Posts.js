import React from 'react'
import Post from './Post'
import Styled from 'styled-components'

const PostsWrapper = Styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
`

const Posts = ({posts}) => {
  const items = posts.map((item, i) =>
    <Post key={i} data={item} />
  )

  return (
    <PostsWrapper>
      {items}
    </PostsWrapper>
  )
}

export default Posts
