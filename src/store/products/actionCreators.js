import * as actionTypes from './actionTypes';

export const productsFetched = (products) => {
	return {
		type: actionTypes.PRODUCTS_FETCHED,
		payload: {
			products,
		},
	};
};

export const productCreated = (product) => {
	return {
		type: actionTypes.PRODUCT_CREATED,
		payload: {
			product,
		},
	};
};
