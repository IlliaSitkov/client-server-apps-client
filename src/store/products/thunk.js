import { productsFetched, productsRemoved } from './actionCreators';
import { filterToQueryString } from '../../shared/utils';

import * as productService from '../../services/productService';

export const fetchFilteredProducts = async (dispatch, getState) => {
	try {
		// dispatch(productsRemoved());
		const res = await productService.fetchFilteredProducts(
			filterToQueryString(getState().filter)
		);
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

export const createProduct = (product) => async (dispatch) => {
	try {
		const res = await productService.createProduct(product);
		if (res.status < 300) {
			dispatch(fetchFilteredProducts);
		} else {
			const obj = await res.json();
			alert(obj.message);
		}
	} catch (e) {
		console.log(e);
	}
};

export const deleteProduct = (productId) => async (dispatch) => {
	try {
		const res = await productService.deleteProduct(productId);
		if (res.status < 300) {
			dispatch(fetchFilteredProducts);
		} else {
			const obj = await res.json();
			alert(obj.message);
		}
	} catch (e) {
		console.log(e);
	}
};

export const updateProduct = (productId, updates) => async (dispatch) => {
	try {
		const res = await productService.updateProduct(productId, updates);
		if (res.status < 300) {
			dispatch(fetchFilteredProducts);
		} else {
			const obj = await res.json();
			alert(obj.message);
		}
	} catch (e) {
		console.log(e);
	}
};

export const addProduct = (productId, quantity) => async (dispatch) => {
	try {
		const res = await productService.addProduct(productId, quantity);
		if (res.status < 300) {
			dispatch(fetchFilteredProducts);
		} else {
			const obj = await res.json();
			alert(obj.message);
		}
	} catch (e) {
		console.log(e);
	}
};

export const takeProduct = (productId, quantity) => async (dispatch) => {
	try {
		const res = await productService.takeProduct(productId, quantity);
		if (res.status < 300) {
			dispatch(fetchFilteredProducts);
		} else {
			const obj = await res.json();
			alert(obj.message);
		}
	} catch (e) {
		console.log(e);
	}
};
