import React from 'react';
import './Header.css';
import { useNavigate } from 'react-router-dom';

export const Header = () => {
	const navigate = useNavigate();

	return (
		<header className='sticky-top d-flex flex-row gap-3 ps-5 pe-5'>
			<button
				onClick={() => navigate('/products', { replace: true })}
				className='btn btn-link'
			>
				Товари
			</button>
			<button
				onClick={() => navigate('/groups', { replace: true })}
				className='btn btn-link'
			>
				Групи товарів
			</button>
		</header>
	);
};
