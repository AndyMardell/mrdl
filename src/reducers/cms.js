const cms = (
  state = {
    posts: [],
    pages: [],
    nav: [],
    categories: []
  }, action) => {
  switch (action.type) {
    case 'update_posts':
      return {
        ...state,
        posts: action.value
      }
    case 'update_pages':
      return {
        ...state,
        pages: action.value
      }
    case 'update_categories':
      return {
        ...state,
        categories: action.value
      }
    case 'update_nav':
      return {
        ...state,
        nav: action.value
      }
    default:
      return state
  }
}

export default cms
