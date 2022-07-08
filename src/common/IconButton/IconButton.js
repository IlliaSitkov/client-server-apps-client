import React from 'react';
import './IconButton.css';

export const IconButton = ({ text, onClick, enabled }) => {
	return (
		<button
			disabled={!enabled}
			onClick={onClick}
			className='btn btn-primary icon-btn'
		>
			{text}
		</button>
	);
};
