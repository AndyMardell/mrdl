import React from 'react'
import Parser from 'html-react-parser'

const PostContent = ({content}) => (
  <div>
    {Parser(content)}
  </div>
)

export default PostContent
