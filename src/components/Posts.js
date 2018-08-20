import React from 'react'
import Post from './Post'

const Posts = ({posts}) => {
  const items = posts.map((item, i) =>
    <Post key={i} data={item} />
  )

  return (
    <div>
      {items}
    </div>
  )
}

export default Posts
