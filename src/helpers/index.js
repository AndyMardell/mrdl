export const getPost = async (slug) => {
  return fetch(process.env.REACT_APP_CMS_URL + '/wp-json/wp/v2/posts?slug=' + slug)
    .then(response => response.json())
    .then(response => {
      if (!response.length) return false
      return response[0]
    })
}

export const getCategories = (ids, categories) => {
  const arr = []

  for (let id of ids) {
    for (let category of categories) {
      if (id === category.id) {
        arr.push({
          id: category.id,
          name: category.name,
          slug: category.slug
        })
      }
    }
  }

  return arr
}

export const getPage = async (slug) => {
  return fetch(process.env.REACT_APP_CMS_URL + '/wp-json/wp/v2/pages?slug=' + slug)
    .then(response => response.json())
    .then(response => {
      if (!response.length) return false
      return response[0]
    })
}
