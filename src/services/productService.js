const url = 'https://localhost:8765/api/product/';

export const fetchFilteredProducts = (filter) => {
	return fetch(url + filter);
};

export const createProduct = (product) => {
	return fetch(url, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(product),
	});
};

export const deleteProduct = (productId) => {
	return fetch(url + productId, {
		method: 'DELETE',
	});
};

export const updateProduct = (productId, updates) => {
	return fetch(url + productId, {
		method: 'PUT',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(updates),
	});
};

export const addProduct = (productId, quantity) => {
	return fetch(url + productId, {
		method: 'PATCH',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({ add: quantity }),
	});
};

export const takeProduct = (productId, quantity) => {
	return fetch(url + productId, {
		method: 'PATCH',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({ take: quantity }),
	});
};
