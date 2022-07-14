import React from 'react';
import './Header.css';
import { useNavigate } from 'react-router-dom';

export const Header = ({ logOut }) => {
	const navigate = useNavigate();

	return (
		<header className='sticky-top d-flex ps-5 pe-5 flex-wrap justify-content-between'>
			<div className='d-flex gap-3'>
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
				<button
					onClick={() => navigate('/statistics', { replace: true })}
					className='btn btn-link'
				>
					Статистика
				</button>
			</div>
			<button
				onClick={() => {
					logOut();
					navigate('/login', { replace: true });
				}}
				className='btn btn-link'
			>
				Вийти
			</button>
		</header>
	);
};
