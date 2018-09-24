import React from 'react'
import Styled from 'styled-components'

const CatWrapper = Styled.div`
  margin-left: 1px;
`

const Category = Styled.span`
  text-transform: uppercase;
  letter-spacing: 2px;
  font-size: 0.8em;
  font-weight: bold;
  margin-right: 5px;
`

const PostCategory = ({ content }) => {
  const categories = content.map((category, i) =>
    <Category key={i}>{category.name}</Category>
  )

  return (
    <CatWrapper>
      {categories}
    </CatWrapper>
  )
}

export default PostCategory
