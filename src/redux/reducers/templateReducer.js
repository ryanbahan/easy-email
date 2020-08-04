import { DefaultTemplate } from '../../utils/Templates/DefaultTemplate';

export const templateReducer = (state = { id: null, name: null, components: [] }, action) => {
	switch (action.type) {
		case 'SET_TEMPLATE':
			return action.payload;
		case 'TOGGLE_COMPONENT_VISIBILITY':
			return updateComponentVisibility(state, action);
		case 'TOGGLE_ITEM_VISIBILITY':
			return updateItemVisibility(state, action);
		case 'UPDATE_ITEM':
			return updateItem(state, action);
		default:
			return state;
	}
};

const updateComponentVisibility = (state, action) => {
	const newState = { ...state };
	const { id, active } = action.payload;
	const updated = newState.components.find((item) => item.id === id);
	updated.active = active;

	return newState;
};

const updateItemVisibility = (state, action) => {
	const newState = { ...state };
	const { componentID, itemID, active } = action.payload;
	const component = newState.components.find((c) => c.id === componentID);
	const item = component.formItems.find((i) => i.id === itemID);
	item.active = !item.active;

	return newState;
};

const updateItem = (state, action) => {
	const newState = { ...state };
	const { itemID, componentID, content } = action.payload;
	const component = newState.components.find((c) => c.id === componentID);
	const item = component.formItems.find((i) => i.id === itemID);
	item.value = content;

	return newState;
};
