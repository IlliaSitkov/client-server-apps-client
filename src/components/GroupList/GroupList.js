import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { LOCAL_STORAGE_TOKEN } from '../../shared/constants';
import { getGroups } from '../../store/selectors';
import { GroupForm } from './components/GroupForm/GroupForm';
import { fetchGroups } from '../../store/groups/thunk';
import { Group } from './components/Group/Group';
import './GroupList.css';

export const GroupList = () => {
	const dispatch = useDispatch();
	const token = localStorage.getItem(LOCAL_STORAGE_TOKEN);

	useEffect(() => {
		dispatch(fetchGroups(token));
	}, []);

	const groups = useSelector(getGroups);

	const views = groups.map((g) => {
		return (
			<div key={g.id}>
				<Group group={g} />
			</div>
		);
	});

	return (
		<div className='container mt-5 mb-5'>
			<h2>Додавання групи товарів</h2>
			<GroupForm />
			<div className='row d-flex flex-column-reverse flex-lg-row'>
				<h2>Групи товарів</h2>
				{views.length > 0 ? (
					<div className='d-flex flex-column gap-3'>{views}</div>
				) : (
					<div> Груп товарів не знайдено</div>
				)}
			</div>
		</div>
	);
};
