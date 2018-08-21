import React from 'react'
import Styled from 'styled-components'

const CatWrapper = Styled.div`

`

const Category = Styled.span`
  text-transform: uppercase;
  letter-spacing: 2px;
  font-size: 13px;
  font-weight: bold;
`

const PostCategory = ({content}) => {
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
