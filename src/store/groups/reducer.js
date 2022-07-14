import * as actionTypes from './actionTypes';

const initialState = [];

export const groupsReducer = (groups = initialState, action) => {
	switch (action.type) {
		case actionTypes.GROUPS_FETCHED:
			return action.payload.groups;
		default:
			return groups;
	}
};
