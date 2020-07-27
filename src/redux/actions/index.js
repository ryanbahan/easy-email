export const update = content => ({
  type: "UPDATE",
  payload: content,
})

export const toggleVisibility = bool => ({
  type: "TOGGLE_VISIBILITY",
  payload: bool,
})

export const isLoading = bool => ({
  type: "IS_LOADING",
  payload: bool,
})

export const hasError = err => ({
  type: "ERROR",
  payload: err,
})

export const clearError = () => ({
  type: "CLEAR_ERROR",
  payload: false,
})

export const hasWarning = warning => ({
  type: "HAS_WARNING",
  payload: warning,
})

export const clearWarning = () => ({
  type: "CLEAR_WARNING",
  payload: false,
})
