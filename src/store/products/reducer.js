import * as actionTypes from './actionTypes';

const initialState = [];

export const productsReducer = (products = initialState, action) => {
	switch (action.type) {
		case actionTypes.PRODUCTS_FETCHED:
			return action.payload.products;
		case actionTypes.PRODUCTS_REMOVED:
			return initialState;
		default:
			return products;
	}
};
