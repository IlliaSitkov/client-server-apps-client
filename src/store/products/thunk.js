import { productsFetched } from './actionCreators';
import { filterToQueryString } from '../../shared/utils';

import * as productService from '../../services/productService';

export const fetchFilteredProducts = (token) => async (dispatch, getState) => {
	try {
		const res = await productService.fetchFilteredProducts(
			filterToQueryString(getState().filter),
			token
		);
		if (res.status === 403) {
			alert('Your session expired. Re-log in');
			return;
		}
		const obj = await res.json();
		if (res.status < 300) {
			dispatch(productsFetched(obj.result));
		} else {
			alert(obj.message);
		}
	} catch (e) {
		console.log(e);
	}
};

export const createProduct = (product, token) => async (dispatch) => {
	try {
		const res = await productService.createProduct(product, token);
		if (res.status < 300) {
			dispatch(fetchFilteredProducts(token));
		} else if (res.status === 403) {
			alert('Your session expired. Re-log in');
		} else {
			const obj = await res.json();
			alert(obj.message);
		}
	} catch (e) {
		console.log(e);
	}
};

export const deleteProduct = (productId, token) => async (dispatch) => {
	try {
		const res = await productService.deleteProduct(productId, token);
		if (res.status < 300) {
			dispatch(fetchFilteredProducts(token));
		} else if (res.status === 403) {
			alert('Your session expired. Re-log in');
		} else {
			const obj = await res.json();
			alert(obj.message);
		}
	} catch (e) {
		console.log(e);
	}
};

export const updateProduct =
	(productId, updates, token) => async (dispatch) => {
		try {
			const res = await productService.updateProduct(productId, updates, token);
			if (res.status < 300) {
				dispatch(fetchFilteredProducts(token));
			} else if (res.status === 403) {
				alert('Your session expired. Re-log in');
			} else {
				const obj = await res.json();
				alert(obj.message);
			}
		} catch (e) {
			console.log(e);
		}
	};

export const addProduct = (productId, quantity, token) => async (dispatch) => {
	try {
		const res = await productService.addProduct(productId, quantity, token);
		if (res.status < 300) {
			dispatch(fetchFilteredProducts(token));
		} else if (res.status === 403) {
			alert('Your session expired. Re-log in');
		} else {
			const obj = await res.json();
			alert(obj.message);
		}
	} catch (e) {
		console.log(e);
	}
};

export const takeProduct = (productId, quantity, token) => async (dispatch) => {
	try {
		const res = await productService.takeProduct(productId, quantity, token);
		if (res.status < 300) {
			dispatch(fetchFilteredProducts(token));
		} else if (res.status === 403) {
			alert('Your session expired. Re-log in');
		} else {
			const obj = await res.json();
			alert(obj.message);
		}
	} catch (e) {
		console.log(e);
	}
};
