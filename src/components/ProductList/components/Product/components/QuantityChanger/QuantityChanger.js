import React, { useState } from 'react';
import { Input } from '../../../../../../common/Input/Input';
import { onChangeHandler } from '../../../../../../shared/utils';
import { IconButton } from '../../../../../../common/IconButton/IconButton';

export const QuantityChanger = ({ id }) => {
	const [quantity, setQuantity] = useState('');

	return (
		<div>
			<div className='text-center mb-2'>Додати/Списати товар</div>
			<div className='d-flex flex-row gap-3'>
				<IconButton enabled={quantity > 0} text='-' />
				<Input
					id='quantityToChange'
					type='number'
					step={1}
					min={0}
					placeholder='Кількість товару'
					value={quantity}
					onChange={onChangeHandler(setQuantity)}
				/>
				<IconButton enabled={quantity > 0} text='+' />
			</div>
		</div>
	);
};
