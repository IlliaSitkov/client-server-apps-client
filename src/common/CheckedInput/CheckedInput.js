import React from 'react';
import { Input } from '../Input/Input';

export const CheckedInput = ({
	checkedValue,
	inputValue,
	onChangeChecked,
	onChangeInput,
	step,
	idInput,
	idCheck,
	placeholder,
}) => {
	return (
		<div className='d-flex flex-row gap-3 align-items-center'>
			<input
				id={idCheck}
				checked={checkedValue}
				onChange={onChangeChecked}
				type='checkbox'
				className='form-check-input'
			/>
			<Input
				disabled={!checkedValue}
				onChange={onChangeInput}
				value={inputValue}
				type='number'
				step={step}
				id={idInput}
				placeholder={placeholder}
			/>
		</div>
	);
};
