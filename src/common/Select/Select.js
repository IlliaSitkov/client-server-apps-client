import React from 'react';

export const Select = ({
	id,
	enableNoOption,
	value,
	label,
	onChange,
	data,
	idSelector,
	nameSelector,
}) => {
	return (
		<div>
			<label htmlFor={id}>{label}</label>
			<select
				value={value}
				onChange={onChange}
				id={id}
				name={id}
				className='form-select'
			>
				{enableNoOption && <option value={-1}>Не обрано</option>}
				{data.map((d) => {
					const optId = idSelector(d);
					return (
						<option key={optId} value={optId}>
							{nameSelector(d)}
						</option>
					);
				})}
			</select>
		</div>
	);
};
