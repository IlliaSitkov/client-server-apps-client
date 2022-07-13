import React, { useState } from 'react';
import { Input } from '../../../../common/Input/Input';
import { Select } from '../../../../common/Select/Select';
import { MinMaxGroup } from '../../../../common/MinMaxGroup/MinMaxGroup';
import { useDispatch } from 'react-redux';
import {
	resetFilter,
	setFilter,
} from '../../../../store/filter/actionCreators';
import { fetchFilteredProducts } from '../../../../store/products/thunk';
import {
	onChangeHandler,
	onChangeHandlerCheckBox,
} from '../../../../shared/utils';
import { LOCAL_STORAGE_TOKEN } from '../../../../shared/constants';

export const ProductFilter = () => {
	const [searchString, setSearchString] = useState('');
	const [groupId, setGroupId] = useState(-1);

	const [minQuantityChecked, setMinQuantityChecked] = useState(false);
	const [maxQuantityChecked, setMaxQuantityChecked] = useState(false);

	const [minQuantity, setMinQuantity] = useState('');
	const [maxQuantity, setMaxQuantity] = useState('');

	const [minPriceChecked, setMinPriceChecked] = useState(false);
	const [maxPriceChecked, setMaxPriceChecked] = useState(false);

	const [minPrice, setMinPrice] = useState('');
	const [maxPrice, setMaxPrice] = useState('');

	const [groups, setGroups] = useState([
		{ name: 'Group 1', id: 1 },
		{ name: 'Group 2', id: 2 },
	]);

	const token = localStorage.getItem(LOCAL_STORAGE_TOKEN); // temporary solution

	const dispatch = useDispatch();

	const clearForm = () => {
		setSearchString('');
		setGroupId(-1);
		setMinQuantityChecked(false);
		setMaxQuantityChecked(false);
		setMinQuantity('');
		setMaxQuantity('');
		setMinPriceChecked(false);
		setMaxPriceChecked(false);
		setMinPrice('');
		setMaxPrice('');
	};

	const resetForm = () => {
		clearForm();
		dispatch(resetFilter());
		dispatch(fetchFilteredProducts(token));
	};

	const applyFilter = () => {
		dispatch(
			setFilter({
				searchString,
				groupId,
				minQuantityChecked,
				maxQuantityChecked,
				minQuantity,
				maxQuantity,
				minPriceChecked,
				maxPriceChecked,
				minPrice,
				maxPrice,
			})
		);
		dispatch(fetchFilteredProducts(token));
	};

	return (
		<div className='product-card'>
			<Input
				type='search'
				id='searchString'
				label='Текстовий пошук'
				placeholder='Пошук'
				value={searchString}
				onChange={onChangeHandler(setSearchString)}
			/>
			<Select
				onChange={onChangeHandler(setGroupId)}
				value={groupId}
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
				checkedValueMin={minQuantityChecked}
				inputValueMin={minQuantity}
				onChangeCheckedMin={onChangeHandlerCheckBox(setMinQuantityChecked)}
				onChangeInputMin={onChangeHandler(setMinQuantity)}
				placeholderMin='Мін. кількість'
				idCheckMax='maxQuantCheck'
				idInputMax='maxQuant'
				checkedValueMax={maxQuantityChecked}
				inputValueMax={maxQuantity}
				onChangeCheckedMax={onChangeHandlerCheckBox(setMaxQuantityChecked)}
				onChangeInputMax={onChangeHandler(setMaxQuantity)}
				placeholderMax='Макс. кількість'
			/>
			<MinMaxGroup
				step={0.1}
				groupLabel='Ціна товару'
				idCheckMin='minPriceCheck'
				idInputMin='minPrice'
				checkedValueMin={minPriceChecked}
				inputValueMin={minPrice}
				onChangeCheckedMin={onChangeHandlerCheckBox(setMinPriceChecked)}
				onChangeInputMin={onChangeHandler(setMinPrice)}
				placeholderMin='Мін. ціна'
				idCheckMax='maxPriceCheck'
				idInputMax='maxPrice'
				checkedValueMax={maxPriceChecked}
				inputValueMax={maxPrice}
				onChangeCheckedMax={onChangeHandlerCheckBox(setMaxPriceChecked)}
				onChangeInputMax={onChangeHandler(setMaxPrice)}
				placeholderMax='Макс. ціна'
			/>
			<hr />
			<div className='d-flex flex-row gap-3 justify-content-center'>
				<button onClick={applyFilter} className='btn btn-primary'>
					Шукати
				</button>
				<button onClick={resetForm} className='btn btn-primary'>
					Очистити
				</button>
			</div>
		</div>
	);
};
