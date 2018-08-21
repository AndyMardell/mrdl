export const updatePostsAction = (posts) => {
  return {
    type: 'update_posts',
    value: posts
  }
}

export const updateCategoriesAction = (categories) => {
  return {
    type: 'update_categories',
    value: categories
  }
}
