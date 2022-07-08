import * as types from './actionTypes';

export const setSearchString = (searchString) => {
	return {
		type: types.FILTER_SET_SEARCH_STRING,
		payload: {
			searchString,
		},
	};
};

export const setGroupId = (groupId) => {
	return {
		type: types.FILTER_SET_GROUP_ID,
		payload: {
			groupId,
		},
	};
};

export const filterReset = () => {
	return {
		type: types.FILTER_RESET,
	};
};

export const setMinQuantity = (minQuantity) => {
	return {
		type: types.FILTER_SET_MIN_QUANTITY,
		payload: { minQuantity },
	};
};

export const setMaxQuantity = (maxQuantity) => {
	return {
		type: types.FILTER_SET_MAX_QUANTITY,
		payload: { maxQuantity },
	};
};

export const setMinPrice = (minPrice) => {
	return {
		type: types.FILTER_SET_MIN_PRICE,
		payload: { minPrice },
	};
};

export const setMaxPrice = (maxPrice) => {
	return {
		type: types.FILTER_SET_MAX_PRICE,
		payload: { maxPrice },
	};
};

export const setMinQuantityChecked = (minQuantityChecked) => {
	return {
		type: types.FILTER_SET_MIN_QUANTITY_CHECKED,
		payload: { minQuantityChecked },
	};
};

export const setMaxQuantityChecked = (maxQuantityChecked) => {
	return {
		type: types.FILTER_SET_MAX_QUANTITY_CHECKED,
		payload: { maxQuantityChecked },
	};
};

export const setMinPriceChecked = (minPriceChecked) => {
	return {
		type: types.FILTER_SET_MIN_PRICE_CHECKED,
		payload: { minPriceChecked },
	};
};

export const setMaxPriceChecked = (maxPriceChecked) => {
	return {
		type: types.FILTER_SET_MAX_PRICE_CHECKED,
		payload: { maxPriceChecked },
	};
};
