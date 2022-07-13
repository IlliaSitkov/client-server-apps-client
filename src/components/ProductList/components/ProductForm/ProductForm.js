import React, { useEffect, useState } from 'react';
import { Input } from '../../../../common/Input/Input';
import { checkFormIsCorrect, onChangeHandler } from '../../../../shared/utils';
import { Select } from '../../../../common/Select/Select';
import { Textarea } from '../../../../common/Textarea/Textarea';

import './ProductForm.css';
import { useDispatch } from 'react-redux';
import { createProduct } from '../../../../store/products/thunk';
import { LOCAL_STORAGE_TOKEN } from '../../../../shared/constants';

export const ProductForm = () => {
	const [formIsCorrect, setFormIsCorrect] = useState(false);
	const [name, setName] = useState('');
	const [description, setDescription] = useState('');
	const [producer, setProducer] = useState('');
	const [price, setPrice] = useState('');
	const [quantity, setQuantity] = useState('');
	const [groupId, setGroupId] = useState(-1);
	const [groups, setGroups] = useState([
		{ name: 'Group 1', id: 1 },
		{ name: 'Group 2', id: 2 },
	]);

	const dispatch = useDispatch();

	const token = localStorage.getItem(LOCAL_STORAGE_TOKEN); // temporary solution

	useEffect(() => {
		checkFormIsCorrect(
			setFormIsCorrect,
			name,
			producer,
			price,
			quantity,
			groupId
		);
	}, [name, description, producer, price, quantity, groupId]);

	const clearForm = () => {
		setName('');
		setDescription('');
		setProducer('');
		setPrice('');
		setQuantity('');
		setGroupId(-1);
	};

	const saveProduct = () => {
		dispatch(
			createProduct(
				{
					name,
					description,
					producer,
					price,
					quantity,
					groupId,
				},
				token
			)
		);
		clearForm();
	};

	return (
		<div className='product-card mb-5'>
			<details>
				<summary>Створити товар</summary>
				<div className='row mt-4'>
					<div className='col-12 col-md-6 mb-3 mb-md-0'>
						<Input
							id='name'
							type='text'
							value={name}
							placeholder='Введіть назву товару'
							label='Назва товару'
							required={true}
							onChange={onChangeHandler(setName)}
						/>
					</div>
					<div className='col-12 col-md-6'>
						<Input
							step={0.1}
							id='price'
							type='number'
							value={price}
							placeholder='Введіть ціну на товар'
							label='Ціна'
							required={true}
							onChange={onChangeHandler(setPrice)}
						/>
					</div>
				</div>
				<div className='row'>
					<div className='col-12 col-md-6 mb-3 mb-md-0'>
						<Input
							id='producer'
							type='text'
							value={producer}
							placeholder='Введіть назву виробника'
							label='Виробник'
							required={true}
							onChange={onChangeHandler(setProducer)}
						/>
					</div>
					<div className='col-12 col-md-6'>
						<Select
							enableNoOption={true}
							value={groupId}
							id='groupId'
							onChange={onChangeHandler(setGroupId)}
							label='Група товару'
							data={groups}
							nameSelector={(d) => d.name}
							idSelector={(d) => d.id}
						/>
					</div>
				</div>
				<div className='row'>
					<div className='col-12 col-md-6 mb-3 mb-md-0'>
						<Textarea
							value={description}
							id='description'
							required={false}
							onChange={onChangeHandler(setDescription)}
							label='Опис товару'
							placeholder='Введіть опис товару'
						/>
					</div>
					<div className='col-12 col-md-6'>
						<Input
							id='quantity'
							type='number'
							value={quantity}
							step={1}
							onChange={onChangeHandler(setQuantity)}
							placeholder='Введіть кількість товару'
							label='Кількість товару'
						/>
					</div>
				</div>
				<div className='row'>
					<div className='col-12'>
						<button
							onClick={saveProduct}
							disabled={!formIsCorrect}
							className='btn btn-success'
						>
							Створити
						</button>
					</div>
				</div>
			</details>
		</div>
	);
};
