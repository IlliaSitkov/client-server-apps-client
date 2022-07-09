import { productsFetched } from './actionCreators';
import { filterToQueryString } from '../../shared/utils';

const url = 'http://localhost:8765/api/product/';

export const fetchFilteredProducts = async (dispatch, getState) => {
	// fetch products from server using filter
	console.log('fetching products');
	try {
		const query = url + filterToQueryString(getState().filter);
		const res = await fetch(query);
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
	console.log('creating a product');
	try {
		const res = await fetch(url, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(product),
		});
		const obj = await res.json();
		if (res.status < 300) {
			dispatch(fetchFilteredProducts);
		} else {
			alert(obj.message);
		}
	} catch (e) {
		console.log(e);
	}
};

export const deleteProduct = (productId) => (dispatch) => {
	// call to server to delete product
	// then reload all products
	dispatch(fetchFilteredProducts);
};

export const updateProduct = (productId, updates) => (dispatch) => {
	// call to server to update product
	// then reload all products
	dispatch(fetchFilteredProducts);
};

export const addProduct = (productId, quantity) => (dispatch) => {
	// call to server to delete product
	// then reload all products
	dispatch(fetchFilteredProducts);
};

export const takeProduct = (productId, quantity) => (dispatch) => {
	// call to server to delete product
	// then reload all products
	dispatch(fetchFilteredProducts);
};
