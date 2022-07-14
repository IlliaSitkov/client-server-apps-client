import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getGroups, getProducts } from '../../store/selectors';
import { fetchFilteredProducts } from '../../store/products/thunk';
import { LOCAL_STORAGE_TOKEN } from '../../shared/constants';
import { fetchGroups } from '../../store/groups/thunk';
import './Statistics.css';

export const Statistics = () => {
	const products = useSelector(getProducts);
	const groups = useSelector(getGroups);

	const dispatch = useDispatch();

	const [token] = useState(localStorage.getItem(LOCAL_STORAGE_TOKEN));

	useEffect(() => {
		dispatch(fetchGroups(token));
		dispatch(fetchFilteredProducts(token));
	}, []);

	const allProdsInfo = (prods) => {
		return prods.map((p) => {
			const group = groups.filter((g) => g.id === p.groupId)[0];
			const groupName = group ? group.name : 'unknown';
			return (
				<tr key={p.id}>
					<td>{p.id}</td>
					<td>{p.name}</td>
					<td>{p.description}</td>
					<td>{p.producer}</td>
					<td>{groupName}</td>
					<td>{p.quantity}</td>
					<td>{p.price}</td>
					<td>{p.price * p.quantity}</td>
				</tr>
			);
		});
	};

	const productInfoTable = (prods) => {
		return (
			<table className='product-card table table-bordered table-striped'>
				<thead>
					<tr>
						<th>Id</th>
						<th>Назва</th>
						<th>Опис</th>
						<th>Виробник</th>
						<th>Назва групи</th>
						<th>Кількість</th>
						<th>Ціна, грн</th>
						<th>Вартість, грн</th>
					</tr>
				</thead>
				<tbody>{allProdsInfo(prods)}</tbody>
			</table>
		);
	};

	const calculateProductsCost = (prods) => {
		return prods.reduce((prev, cur) => prev + cur.price * cur.quantity, 0);
	};

	const groupProducts = groups.map((g) => {
		const groupProds = products.filter((p) => p.groupId === g.id);
		return (
			<div className='mb-5' key={g.id}>
				<h4>{g.name}</h4>
				<p>
					<strong>Опис:</strong> {g.description}
				</p>
				<p>
					<strong>Вартість товарів у групі:</strong>{' '}
					{calculateProductsCost(groupProds)} грн
				</p>
				{productInfoTable(groupProds)}
			</div>
		);
	});

	return (
		<div className='container mt-5 mb-5'>
			<h2>Статистика складу</h2>
			<div className='mt-5 mb-5'>
				<h3>Всі товари</h3>
				{products.length > 0 ? (
					<>
						<p>
							<strong>Загальна вартість усіх товарів на складі: </strong>
							{calculateProductsCost(products)} грн
						</p>
						{productInfoTable(products)}
					</>
				) : (
					'Товарів не додано'
				)}
			</div>
			<hr />
			<div>
				<h3>Товари за групами</h3>
				{groups.length > 0 ? (
					<div className='mt-5'>{groupProducts}</div>
				) : (
					'Груп не додано'
				)}
			</div>
		</div>
	);
};
