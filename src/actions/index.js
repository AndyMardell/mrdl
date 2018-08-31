export const updatePostsAction = (posts) => {
  return {
    type: 'update_posts',
    value: posts
  }
}

export const updatePagesAction = (pages) => {
  return {
    type: 'update_pages',
    value: pages
  }
}

export const updateCategoriesAction = (categories) => {
  return {
    type: 'update_categories',
    value: categories
  }
}

export const updateNavAction = (nav) => {
  return {
    type: 'update_nav',
    value: nav
  }
}
