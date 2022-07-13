import React, { useEffect, useState } from 'react';
import { Product } from './components/Product/Product';
import { ProductFilter } from './components/ProductFilter/ProductFilter';
import { ProductForm } from './components/ProductForm/ProductForm';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../../store/selectors';
import { fetchFilteredProducts } from '../../store/products/thunk';
import { resetFilter } from '../../store/filter/actionCreators';
import { LOCAL_STORAGE_TOKEN } from '../../shared/constants';

export const ProductList = () => {
	const dispatch = useDispatch();

	const token = localStorage.getItem(LOCAL_STORAGE_TOKEN); // temporary solution

	useEffect(() => {
		dispatch(fetchFilteredProducts(token));
		return () => {
			dispatch(resetFilter());
		};
	}, []);

	const products = useSelector(getProducts);

	const views = products.map((p) => {
		return (
			<div key={p.id}>
				<Product product={p} />
			</div>
		);
	});

	return (
		<div className='container mt-5 mb-5'>
			<h2>Додавання товару</h2>
			<ProductForm />
			<div className='row d-flex flex-column-reverse flex-lg-row'>
				<div className='col-10 col-lg-8 ms-auto me-auto'>
					<h2>Товари на складі</h2>
					{views.length > 0 ? (
						<div className='d-flex flex-column gap-3'>{views}</div>
					) : (
						<div> Товарів не знайдено</div>
					)}
				</div>
				<div className='col-lg-4 col-10 ms-auto me-auto mb-3'>
					<h2>Пошук товарів</h2>
					<ProductFilter />
				</div>
			</div>
		</div>
	);
};
