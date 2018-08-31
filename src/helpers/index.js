export const getPosts = async () => {
  return fetch(process.env.REACT_APP_CMS_URL + '/wp-json/wp/v2/posts')
    .then(response => response.json())
    .then(response => {
      if (!response.length) throw response
      return {
        'ok': true,
        'data': response
      }
    })
    .catch(err => {
      return {
        'ok': false,
        'error': err
      }
    })
}

export const getPages = async () => {
  return fetch(process.env.REACT_APP_CMS_URL + '/wp-json/wp/v2/pages')
    .then(response => response.json())
    .then(response => {
      if (!response.length) throw response
      return {
        'ok': true,
        'data': response
      }
    })
    .catch(err => {
      return {
        'ok': false,
        'error': err
      }
    })
}

export const getCategories = async () => {
  return fetch(process.env.REACT_APP_CMS_URL + '/wp-json/wp/v2/categories')
    .then(response => response.json())
    .then(response => {
      if (!response.length) throw response
      return {
        'ok': true,
        'data': response
      }
    })
    .catch(err => {
      return {
        'ok': false,
        'error': err
      }
    })
}

export const getNav = async () => {
  return fetch(process.env.REACT_APP_CMS_URL + '/wp-json/wp-api-menus/v2/menu-locations/main-menu')
    .then(response => response.json())
    .then(response => {
      if (!response.length) throw response
      return {
        'ok': true,
        'data': response
      }
    })
    .catch(err => {
      return {
        'ok': false,
        'error': err
      }
    })
}

export const getPost = async (slug) => {
  return fetch(process.env.REACT_APP_CMS_URL + '/wp-json/wp/v2/posts?slug=' + slug)
    .then(response => response.json())
    .then(response => {
      if (!response.length) throw response
      return {
        'ok': true,
        'data': response[0]
      }
    })
    .catch(err => {
      return {
        'ok': false,
        'error': err
      }
    })
}

export const getPage = async (slug) => {
  return fetch(process.env.REACT_APP_CMS_URL + '/wp-json/wp/v2/pages?slug=' + slug)
    .then(response => response.json())
    .then(response => {
      if (!response.length) throw response
      return {
        'ok': true,
        'data': response[0]
      }
    })
    .catch(err => {
      return {
        'ok': false,
        'error': err
      }
    })
}

export const getCategoryDetails = (ids, categories) => {
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
