import React, { useState } from 'react';
import { Input } from '../../../../common/Input/Input';
import {
	onChangeHandlerCheckBoxDispatch,
	onChangeHandlerDispatch,
} from '../../../../shared/utils';
import { Select } from '../../../../common/Select/Select';
import { MinMaxGroup } from '../../../../common/MinMaxGroup/MinMaxGroup';
import { useDispatch, useSelector } from 'react-redux';
import {
	filterReset,
	setGroupId,
	setMaxPrice,
	setMaxPriceChecked,
	setMaxQuantity,
	setMaxQuantityChecked,
	setMinPrice,
	setMinPriceChecked,
	setMinQuantity,
	setMinQuantityChecked,
	setSearchString,
} from '../../../../store/filter/actionCreators';
import { getFilter } from '../../../../store/selectors';

export const ProductFilter = () => {
	const dispatch = useDispatch();

	const [groups, setGroups] = useState([
		{ name: 'Group 1', id: 1 },
		{ name: 'Group 2', id: 2 },
	]);

	const filter = useSelector(getFilter);

	const clearForm = () => {
		dispatch(filterReset());
	};

	return (
		<div className='product-card'>
			<Input
				type='search'
				id='searchString'
				label='Текстовий пошук'
				placeholder='Пошук'
				value={filter.searchString}
				onChange={onChangeHandlerDispatch(dispatch, setSearchString)}
			/>
			<Select
				onChange={onChangeHandlerDispatch(dispatch, setGroupId)}
				value={filter.groupId}
				id='groupIdFilter'
				nameSelector={(d) => d.name}
				idSelector={(d) => d.id}
				data={groups}
				enableNoOption={true}
				label='Група товару'
			/>
			<MinMaxGroup
				step={1}
				groupLabel='Кількість товару'
				idCheckMin='minQuantCheck'
				idInputMin='minQuant'
				checkedValueMin={filter.minQuantityChecked}
				inputValueMin={filter.minQuantity}
				onChangeCheckedMin={onChangeHandlerCheckBoxDispatch(
					dispatch,
					setMinQuantityChecked
				)}
				onChangeInputMin={onChangeHandlerDispatch(dispatch, setMinQuantity)}
				placeholderMin='Мін. кількість'
				idCheckMax='maxQuantCheck'
				idInputMax='maxQuant'
				checkedValueMax={filter.maxQuantityChecked}
				inputValueMax={filter.maxQuantity}
				onChangeCheckedMax={onChangeHandlerCheckBoxDispatch(
					dispatch,
					setMaxQuantityChecked
				)}
				onChangeInputMax={onChangeHandlerDispatch(dispatch, setMaxQuantity)}
				placeholderMax='Макс. кількість'
			/>
			<MinMaxGroup
				step={0.1}
				groupLabel='Ціна товару'
				idCheckMin='minPriceCheck'
				idInputMin='minPrice'
				checkedValueMin={filter.minPriceChecked}
				inputValueMin={filter.minPrice}
				onChangeCheckedMin={onChangeHandlerCheckBoxDispatch(
					dispatch,
					setMinPriceChecked
				)}
				onChangeInputMin={onChangeHandlerDispatch(dispatch, setMinPrice)}
				placeholderMin='Мін. ціна'
				idCheckMax='maxPriceCheck'
				idInputMax='maxPrice'
				checkedValueMax={filter.maxPriceChecked}
				inputValueMax={filter.maxPrice}
				onChangeCheckedMax={onChangeHandlerCheckBoxDispatch(
					dispatch,
					setMaxPriceChecked
				)}
				onChangeInputMax={onChangeHandlerDispatch(dispatch, setMaxPrice)}
				placeholderMax='Макс. ціна'
			/>
			<hr />
			<div className='d-flex flex-row gap-3 justify-content-center'>
				<button className='btn btn-primary'>Шукати</button>
				<button onClick={clearForm} className='btn btn-primary'>
					Очистити
				</button>
			</div>
		</div>
	);
};
