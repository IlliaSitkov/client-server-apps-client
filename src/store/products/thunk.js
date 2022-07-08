import { productsFetched } from './actionCreators';
import { filterToQueryString } from '../../shared/utils';

const url = 'http://localhost:8765/api/product/';

export const fetchFilteredProducts = async (dispatch, getState) => {
	// fetch products from server using filter
	console.log('fetching products');
	try {
		const query = url + filterToQueryString(getState().filter);
		const res = await fetch(query);
		if (res.status < 300) {
			const obj = await res.json();
			dispatch(productsFetched(obj.result));
		}
	} catch (e) {
		console.log(e);
	}
};

export const createProduct = (product) => (dispatch) => {
	// call to server to save product
	// then reload all products
	dispatch(fetchFilteredProducts);
};

export const deleteProduct = (productId) => (dispatch) => {
	// call to server to delete product
	// then reload all products
	dispatch(fetchFilteredProducts);
};

export const updateProduct = (productId, updates) => (dispatch) => {
	// call to server to delete product
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
