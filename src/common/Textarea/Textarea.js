import React from 'react';

export const Textarea = ({
	id,
	label,
	onChange,
	required,
	value,
	placeholder,
}) => {
	return (
		<div>
			<label htmlFor={id}>{label}</label>
			<textarea
				id={id}
				name={id}
				required={required}
				value={value}
				style={{ resize: 'none' }}
				onChange={onChange}
				rows={4}
				className='form-control'
				placeholder={placeholder}
			/>
		</div>
	);
};
