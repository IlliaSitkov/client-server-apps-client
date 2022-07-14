import * as actionTypes from './actionTypes';

export const groupsFetched = (groups) => {
    return {
        type: actionTypes.GROUPS_FETCHED,
        payload: {
            groups
        }
    };
};
