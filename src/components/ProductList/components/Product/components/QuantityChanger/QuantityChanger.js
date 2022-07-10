import React, { useState } from 'react';
import { Input } from '../../../../../../common/Input/Input';
import { onChangeHandler } from '../../../../../../shared/utils';
import { IconButton } from '../../../../../../common/IconButton/IconButton';
import { useDispatch } from 'react-redux';
import * as productThunk from '../../../../../../store/products/thunk';

export const QuantityChanger = ({ id }) => {
	const [quantity, setQuantity] = useState('');

	const dispatch = useDispatch();

	const addProduct = () => {
		dispatch(productThunk.addProduct(id, quantity));
		setQuantity('');
	};

	const takeProduct = () => {
		dispatch(productThunk.takeProduct(id, quantity));
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
