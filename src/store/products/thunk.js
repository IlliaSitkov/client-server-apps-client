import { productsFetched } from './actionCreators';

export const fetchAllProducts = (dispatch, getState) => {
	console.log('fetch all products');
	console.log(getState());
	// fetch products from server
	dispatch(productsFetched([]));
};

export const createProduct = (product) => (dispatch) => {
	dispatch();
};
