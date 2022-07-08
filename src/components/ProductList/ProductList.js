import React from 'react';
import { Product } from './components/Product/Product';
import { ProductFilter } from './components/ProductFilter/ProductFilter';
import { ProductForm } from './components/ProductForm/ProductForm';
import { useDispatch } from 'react-redux';
import { fetchAllProducts } from '../../store/products/thunk';

export const ProductList = () => {
	// const dispatch = useDispatch();
	//
	// dispatch(fetchAllProducts);

	return (
		<div className='container mt-5'>
			<h2>Додавання товару</h2>
			<ProductForm />
			<div className='row d-flex flex-column-reverse flex-lg-row'>
				<div className='col-10 col-lg-8 ms-auto me-auto'>
					<h2>Товари на складі</h2>
					<div className='d-flex flex-column gap-3'>
						<Product />
						<Product />
						<Product />
					</div>
				</div>
				<div className='col-lg-4 col-10 ms-auto me-auto mb-3'>
					<h2>Пошук товарів</h2>
					<ProductFilter />
				</div>
			</div>
		</div>
	);
};
