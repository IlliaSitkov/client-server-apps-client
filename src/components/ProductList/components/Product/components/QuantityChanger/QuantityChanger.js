import React, { useState } from 'react';
import { Input } from '../../../../../../common/Input/Input';
import { onChangeHandler } from '../../../../../../shared/utils';
import { IconButton } from '../../../../../../common/IconButton/IconButton';
import { useDispatch } from 'react-redux';
import * as productThunk from '../../../../../../store/products/thunk';
import { LOCAL_STORAGE_TOKEN } from '../../../../../../shared/constants';

export const QuantityChanger = ({ id }) => {
	const [quantity, setQuantity] = useState('');

	const dispatch = useDispatch();

	const token = localStorage.getItem(LOCAL_STORAGE_TOKEN); // temporary solution

	const addProduct = () => {
		dispatch(productThunk.addProduct(id, quantity, token));
		setQuantity('');
	};

	const takeProduct = () => {
		dispatch(productThunk.takeProduct(id, quantity, token));
		setQuantity('');
	};

	return (
		<div>
			<div className='text-center mb-2'>Списати/Додати товар</div>
			<div className='d-flex flex-row gap-3'>
				<IconButton onClick={takeProduct} enabled={quantity > 0} text='-' />
				<Input
					id='quantityToChange'
					type='number'
					step={1}
					min={0}
					placeholder='Кількість товару'
					value={quantity}
					onChange={onChangeHandler(setQuantity)}
				/>
				<IconButton onClick={addProduct} enabled={quantity > 0} text='+' />
			</div>
		</div>
	);
};
