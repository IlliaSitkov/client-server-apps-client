const url = 'https://localhost:8766/api/product/';

const token =
	'eyJhbGciOiJIUzI1NiJ9.eyJ1c2VybmFtZSI6InVzZXIxIiwiaXNzIjoidWEuY29tLmNsaWVudC1zZXJ2ZXItYXBwIiwiaWF0IjoxNjU3Njk2NDUyLCJleHAiOjE2NTc2OTY3NTJ9.-Kh2Wq2gL5dS1gilnkZr7YMdNbaiCOTbQiEyhuOCBr0';

export const fetchFilteredProducts = (filter) => {
	return fetch(url + filter, {
		method: 'GET',
		headers: {
			JWToken: token,
		},
	});
};

export const createProduct = (product) => {
	return fetch(url, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			JWToken: token,
		},
		body: JSON.stringify(product),
	});
};

export const deleteProduct = (productId) => {
	return fetch(url + productId, {
		method: 'DELETE',
		headers: {
			JWToken: token,
		},
	});
};

export const updateProduct = (productId, updates) => {
	return fetch(url + productId, {
		method: 'PUT',
		headers: {
			JWToken: token,
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(updates),
	});
};

export const addProduct = (productId, quantity) => {
	return fetch(url + productId, {
		method: 'PATCH',
		headers: {
			JWToken: token,
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({ add: quantity }),
	});
};

export const takeProduct = (productId, quantity) => {
	return fetch(url + productId, {
		method: 'PATCH',
		headers: {
			JWToken: token,
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({ take: quantity }),
	});
};
