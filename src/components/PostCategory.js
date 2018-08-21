import React from 'react'
import Styled from 'styled-components'

const CatWrapper = Styled.div`
`

const PostCategory = ({content}) => {
  const categories = content.map((category, i) =>
    <span key={i}>{category}</span>
  )

  return (
    <CatWrapper>
      {categories}
    </CatWrapper>
  )
}

export default PostCategory
