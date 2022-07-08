export const onChangeHandler = (setter) => (event) => {
	setter(event.target.value);
};

export const onChangeHandlerCheckBox = (setter) => (event) => {
	setter(event.target.checked);
};

export const onChangeHandlerDispatch = (dispatch, actionCreator) => (event) => {
	dispatch(actionCreator(event.target.value));
};

export const onChangeHandlerCheckBoxDispatch =
	(dispatch, actionCreator) => (event) => {
		dispatch(actionCreator(event.target.checked));
	};

export const filterToQueryString = (filter) => {
	let queryString = '';
	if (filter.searchString.length > 0) {
		queryString += '?searchString=' + filter.searchString;
	}
	if (filter.groupId >= 0) {
		queryString += '&groupId=' + filter.groupId;
	}
	if (filter.minQuantityChecked) {
		queryString += '&minQuantity=' + filter.minQuantity;
	}
	if (filter.maxQuantityChecked) {
		queryString += '&maxQuantity=' + filter.maxQuantity;
	}
	if (filter.minPriceChecked) {
		queryString += '&minPrice=' + filter.minPrice;
	}
	if (filter.maxPriceChecked) {
		queryString += '&maxPrice=' + filter.maxPrice;
	}
	return queryString;
};

export const checkFormIsCorrect = (
	setter,
	name,
	producer,
	price,
	quantity,
	groupId
) => {
	setter(
		name.length > 0 &&
			producer.length > 0 &&
			+price >= 0 &&
			price.toString().length > 0 &&
			+quantity >= 0 &&
			quantity.toString().length > 0 &&
			+groupId >= 0
	);
};
