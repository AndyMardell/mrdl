export const updateAction = (type, data) => {
  return {
    type: 'update_' + type,
    value: data
  }
}
