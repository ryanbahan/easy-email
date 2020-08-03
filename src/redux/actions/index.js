export const update = (content) => ({
	type: 'UPDATE',
	payload: content
});

export const updateItem = (content) => ({
	type: 'UPDATE_ITEM',
	payload: content
});

export const toggleComponentVisibility = (bool) => ({
	type: 'TOGGLE_COMPONENT_VISIBILITY',
	payload: bool
});

export const toggleItemVisibility = (bool) => ({
	type: 'TOGGLE_ITEM_VISIBILITY',
	payload: bool
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
