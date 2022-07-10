export const onChangeHandler = (setter) => (event) => {
	setter(event.target.value);
};

export const onChangeHandlerCheckBox = (setter) => (event) => {
	setter(event.target.checked);
};

// export const onChangeHandlerDispatch = (dispatch, actionCreator) => (event) => {
// 	dispatch(actionCreator(event.target.value));
// };
//
// export const onChangeHandlerCheckBoxDispatch =
// 	(dispatch, actionCreator) => (event) => {
// 		dispatch(actionCreator(event.target.checked));
// 	};

export const filterToQueryString = (filter) => {
	let queryString = '';
	const filters = [];
	if (filter.searchString.length > 0) {
		filters.push('searchString=' + filter.searchString);
	}
	if (filter.groupId >= 0) {
		filters.push('groupId=' + Number(filter.groupId));
	}
	if (filter.minQuantityChecked) {
		filters.push('minQuantity=' + Number(filter.minQuantity));
	}
	if (filter.maxQuantityChecked) {
		filters.push('maxQuantity=' + Number(filter.maxQuantity));
	}
	if (filter.minPriceChecked) {
		filters.push('minPrice=' + Number(filter.minPrice));
	}
	if (filter.maxPriceChecked) {
		filters.push('maxPrice=' + Number(filter.maxPrice));
	}
	if (filters.length > 0) {
		queryString = '?' + filters.join('&');
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