export const setTemplate = (obj) => ({
	type: 'SET_TEMPLATE',
	payload: obj
});

export const updateItem = (obj) => ({
	type: 'UPDATE_ITEM',
	payload: obj
});

export const toggleComponentVisibility = (obj) => ({
	type: 'TOGGLE_COMPONENT_VISIBILITY',
	payload: obj
});

export const toggleItemVisibility = (obj) => ({
	type: 'TOGGLE_ITEM_VISIBILITY',
	payload: obj
});

export const isLoading = (bool) => ({
	type: 'IS_LOADING',
	payload: bool
});

export const hasError = (err) => ({
	type: 'ERROR',
	payload: err
});

export const clearError = () => ({
	type: 'CLEAR_ERROR',
	payload: false
});

export const hasWarning = (warning) => ({
	type: 'HAS_WARNING',
	payload: warning
});

export const clearWarning = () => ({
	type: 'CLEAR_WARNING',
	payload: false
});
