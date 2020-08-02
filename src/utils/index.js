export const getFormState = (arr) => {
  return arr.reduce((obj, item) => {
    return obj
  }, {})
}

export const getVisibilityState = (arr) => {
  return arr.reduce((obj, item) => {
    obj[item.title] = true

    item.formItems.forEach(formItem => {
      if (formItem.checkbox) {
        obj[formItem.title] = true
      }
    })
    
    return obj
  }, {})
}