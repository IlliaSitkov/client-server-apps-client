import React, { useEffect, useState } from 'react';
import './Product.css';
import { Input } from '../../../../common/Input/Input';
import { Textarea } from '../../../../common/Textarea/Textarea';
import { Select } from '../../../../common/Select/Select';
import { QuantityChanger } from './components/QuantityChanger/QuantityChanger';
import { checkFormIsCorrect, onChangeHandler } from '../../../../shared/utils';
import * as productThunk from '../../../../store/products/thunk';
import { useDispatch } from 'react-redux';
import { LOCAL_STORAGE_TOKEN } from '../../../../shared/constants';

export const Product = ({ product }) => {
	const [groups, setGroups] = useState([
		{ name: 'Group 1', id: 1 },
		{ name: 'Group 2', id: 2 },
	]);
	const [name, setName] = useState('');
	const [description, setDescription] = useState('');
	const [producer, setProducer] = useState('');
	const [price, setPrice] = useState(0);
	const [quantity, setQuantity] = useState(0);
	const [groupId, setGroupId] = useState(1);

	const [changesMade, setChangesMade] = useState(false);
	const [formIsCorrect, setFormIsCorrect] = useState(true);

	const dispatch = useDispatch();

	const token = localStorage.getItem(LOCAL_STORAGE_TOKEN); // temporary solution

	useEffect(() => {
		setName(product.name);
		setDescription(product.description);
		setPrice(product.price);
		setProducer(product.producer);
		setGroupId(product.groupId);
		setQuantity(product.quantity);
	}, [product]);

	useEffect(() => {
		checkChangesMade();
		checkFormIsCorrect(
			setFormIsCorrect,
			name,
			producer,
			price,
			quantity,
			groupId
		);
	}, [name, description, producer, price, groupId, product]);

	const checkChangesMade = () => {
		setChangesMade(
			!(
				product.name === name &&
				product.description === description &&
				product.producer === producer &&
				product.price === +price &&
				product.groupId === +groupId
			)
		);
	};

	const deleteProduct = () => {
		dispatch(productThunk.deleteProduct(product.id, token));
	};

	const updateProduct = () => {
		dispatch(
			productThunk.updateProduct(
				product.id,
				{
					name,
					description,
					producer,
					price,
					groupId,
				},
				token
			)
		);
	};

	return (
		<div className='product-card'>
			<details>
				<summary>{name}</summary>
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
							enableNoOption={false}
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
							disabled={true}
							id='quantity'
							type='number'
							value={quantity}
							step={1}
							label='Кількість товару'
						/>
					</div>
				</div>
				<div className='row'>
					<div className='mt-3 col-12 d-flex justify-content-between gap-4 flex-wrap align-items-start flex-wrap-reverse'>
						<div className='d-flex flex-row gap-4'>
							<button
								onClick={updateProduct}
								disabled={!changesMade || !formIsCorrect}
								className='btn btn-success'
							>
								Оновити
							</button>
							<button onClick={deleteProduct} className='btn btn-danger'>
								Видалити
							</button>
						</div>
						<QuantityChanger id={product.id} />
					</div>
				</div>
			</details>
		</div>
	);
};
