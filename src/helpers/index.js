export const apiGet = async (key, slug = null) => {
  const base = process.env.REACT_APP_CMS_URL
  const route = '/wp-json/wp/v2/'
  const postPageSlug = slug ? '?slug=' + slug : ''
  var url = base + route + key + postPageSlug

  if (key === 'media') {
    url = base + route + key + '/' + slug
  }

  if (key === 'nav') {
    url = base + '/wp-json/wp-api-menus/v2/menu-locations/main-menu/'
  }

  return fetch(url)
    .then(response => response.json())
    .then(response => {
      if (!responseOk(key, response)) throw response

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

const responseOk = (key, response) => {
  if (key === 'media' && response) {
    return true
  }

  if (response.length) {
    return true
  }

  return false
}
