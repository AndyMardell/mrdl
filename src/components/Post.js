import React from 'react'
import PostThumb from './PostThumb'
import PostCategory from './PostCategory'
import PostTitle from './PostTitle'
import PostContent from './PostContent'
import PostMore from './PostMore'

const Post = ({ data, categories, single }) => {
  const content = single ? data.content.rendered : data.excerpt.rendered
  const className = single ? 'post-single narrow padding-top-small padding-bottom-small' : 'post-archive'

  return (
    <div className={className}>
      {single &&
        <PostThumb id={data.featured_media} alt={data.title.rendered} />
      }
      <PostCategory content={categories} />
      <PostTitle content={data.title.rendered} slug={data.slug} single={single} />
      <PostContent content={content} />
      {!single &&
        <PostMore slug={data.slug} />
      }
    </div>
  )
}

export default Post
