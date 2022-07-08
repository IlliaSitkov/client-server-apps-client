import React from 'react';
import { CheckedInput } from '../CheckedInput/CheckedInput';
import './MinMaxGroup.css';

export const MinMaxGroup = ({
	groupLabel,
	checkedValueMin,
	checkedValueMax,
	inputValueMin,
	inputValueMax,
	onChangeCheckedMin,
	onChangeCheckedMax,
	onChangeInputMin,
	onChangeInputMax,
	step,
	idInputMin,
	idInputMax,
	idCheckMin,
	idCheckMax,
	placeholderMin,
	placeholderMax,
}) => {
	return (
		<div className='div-space'>
			<label>{groupLabel}</label>
			<CheckedInput
				idInput={idInputMin}
				idCheck={idCheckMin}
				checkedValue={checkedValueMin}
				step={step}
				placeholder={placeholderMin}
				onChangeInput={onChangeInputMin}
				inputValue={inputValueMin}
				onChangeChecked={onChangeCheckedMin}
			/>
			<CheckedInput
				idInput={idInputMax}
				idCheck={idCheckMax}
				checkedValue={checkedValueMax}
				step={step}
				placeholder={placeholderMax}
				onChangeInput={onChangeInputMax}
				inputValue={inputValueMax}
				onChangeChecked={onChangeCheckedMax}
			/>
		</div>
	);
};
