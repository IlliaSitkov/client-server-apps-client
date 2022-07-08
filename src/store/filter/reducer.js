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
		case types.FILTER_SET:
			return action.payload.filter;
		default:
			return filter;
	}
};
