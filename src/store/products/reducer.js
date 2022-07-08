import * as actionTypes from './actionTypes';

const initialState = [];

export const productsReducer = (products = initialState, action) => {
	switch (action.type) {
		case actionTypes.PRODUCTS_FETCHED:
			return action.payload.products;
		case actionTypes.PRODUCT_CREATED:
			return [...products, action.payload.product];
		case actionTypes.PRODUCT_DELETED:
			return products.filter((p) => p.id !== action.payload.productId);
		default:
			return products;
	}
};
