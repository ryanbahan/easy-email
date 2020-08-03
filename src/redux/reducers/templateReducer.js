import { DefaultTemplate } from '../../utils/Templates/DefaultTemplate';

export const templateReducer = (state = DefaultTemplate, action) => {
	switch (action.type) {
		case 'TOGGLE_COMPONENT_VISIBILITY':
			const newState = { ...state };
			const { id, active } = action.payload;
			const updated = newState.components.find((item) => item.id === id);
			updated.active = active;

			return newState;
		case 'TOGGLE_ITEM_VISIBILITY':
			console.log(action.payload);
			return state;
		default:
			return state;
	}
};
