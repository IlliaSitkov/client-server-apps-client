import React from 'react';
import './Input.css';

export const Input = ({
	type,
	onChange,
	required,
	label,
	id,
	placeholder,
	value,
	disabled,
	step,
}) => {
	return (
		<div>
			{label && <label htmlFor={id}>{label}</label>}
			<input
				step={step}
				disabled={disabled}
				className='form-control'
				id={id}
				value={value}
				name={id}
				type={type}
				onChange={onChange}
				required={required}
				placeholder={placeholder}
				min={0}
				autoComplete="off"
			/>
		</div>
	);
};
