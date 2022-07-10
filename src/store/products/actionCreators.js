import * as actionTypes from './actionTypes';

export const productsFetched = (products) => {
	return {
		type: actionTypes.PRODUCTS_FETCHED,
		payload: {
			products,
		},
	};
};

export const productsRemoved = () => {
	return {
		type: actionTypes.PRODUCTS_REMOVED,
	};
};
