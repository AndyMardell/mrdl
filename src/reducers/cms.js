const cms = (
  state = {
    posts: []
  }, action) => {
  switch (action.type) {
    case 'update_posts':
      return {
        ...state,
        posts: action.value
      }
    default:
      return state
  }
}

export default cms
