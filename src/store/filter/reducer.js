import * as types from './actionTypes';

const initialFilter = {
	searchString: '',
	groupId: -1,
	minQuantityChecked: false,
	maxQuantityChecked: false,
	minQuantity: '',
	maxQuantity: '',
	minPriceChecked: false,
	maxPriceChecked: false,
	minPrice: '',
	maxPrice: '',
};

export const filterReducer = (filter = initialFilter, action) => {
	switch (action.type) {
		case types.FILTER_RESET:
			return initialFilter;
		case types.FILTER_SET_SEARCH_STRING:
			return {
				...filter,
				searchString: action.payload.searchString,
			};
		case types.FILTER_SET_GROUP_ID:
			return {
				...filter,
				groupId: action.payload.groupId,
			};
		case types.FILTER_SET_MIN_QUANTITY:
			return {
				...filter,
				minQuantity: action.payload.minQuantity,
			};
		case types.FILTER_SET_MAX_QUANTITY:
			return {
				...filter,
				maxQuantity: action.payload.maxQuantity,
			};
		case types.FILTER_SET_MIN_PRICE:
			return {
				...filter,
				minPrice: action.payload.minPrice,
			};
		case types.FILTER_SET_MAX_PRICE:
			return {
				...filter,
				maxPrice: action.payload.maxPrice,
			};
		case types.FILTER_SET_MIN_QUANTITY_CHECKED:
			return {
				...filter,
				minQuantityChecked: action.payload.minQuantityChecked,
			};
		case types.FILTER_SET_MAX_QUANTITY_CHECKED:
			return {
				...filter,
				maxQuantityChecked: action.payload.maxQuantityChecked,
			};
		case types.FILTER_SET_MIN_PRICE_CHECKED:
			return {
				...filter,
				minPriceChecked: action.payload.minPriceChecked,
			};
		case types.FILTER_SET_MAX_PRICE_CHECKED:
			return {
				...filter,
				maxPriceChecked: action.payload.maxPriceChecked,
			};
		default:
			return filter;
	}
};
