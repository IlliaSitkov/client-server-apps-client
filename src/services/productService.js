const url = 'https://localhost:8766/api/product/';

export const fetchFilteredProducts = (filter, token) => {
	return fetch(url + filter, {
		method: 'GET',
		headers: {
			JWToken: token,
		},
	});
};

export const createProduct = (product, token) => {
	return fetch(url, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			JWToken: token,
		},
		body: JSON.stringify(product),
	});
};

export const deleteProduct = (productId, token) => {
	return fetch(url + productId, {
		method: 'DELETE',
		headers: {
			JWToken: token,
		},
	});
};

export const updateProduct = (productId, updates, token) => {
	return fetch(url + productId, {
		method: 'PUT',
		headers: {
			JWToken: token,
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(updates),
	});
};

export const addProduct = (productId, quantity, token) => {
	return fetch(url + productId, {
		method: 'PATCH',
		headers: {
			JWToken: token,
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({ add: quantity }),
	});
};

export const takeProduct = (productId, quantity, token) => {
	return fetch(url + productId, {
		method: 'PATCH',
		headers: {
			JWToken: token,
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({ take: quantity }),
	});
};
