export const getDefaultState = (template) => {
	return template.components.reduce((obj, item) => {
		item.formItems.forEach((formItem) => {
			if (formItem.placeholder !== undefined) {
				obj[formItem.store] = formItem.placeholder;
			}
		});

		return obj;
	}, {});
};

export const getVisibilityState = (template) => {
	return template.components.reduce((obj, item) => {
		obj[item.title] = true;

		item.formItems.forEach((formItem) => {
			if (formItem.checkbox) {
				obj[formItem.title] = true;
			}
		});

		return obj;
	}, {});
};

export const mapFormItemsToProps = (arr) => {
	return arr.reduce((obj, item) => {
		obj[item.store] = item.value;

		if (item.checkbox) {
			obj[`${item.store}Active`] = item.active;
		}

		return obj;
	}, {});
};
