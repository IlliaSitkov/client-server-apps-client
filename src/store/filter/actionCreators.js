import * as types from './actionTypes';

export const resetFilter = () => {
	return {
		type: types.FILTER_RESET,
	};
};

export const setFilter = (filter) => {
	return {
		type: types.FILTER_SET,
		payload: { filter },
	};
};
