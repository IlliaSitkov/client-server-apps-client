import * as groupService from '../../services/groupService';
import { groupsFetched } from './actionCreators';
import { processSessionTimeout } from '../../shared/utils';
import { FORBIDDEN_STATUS_CODE } from '../../shared/constants';

export const fetchGroups = (token) => async (dispatch) => {
    try {
        let res = await groupService.fecthAllGroups(token);
        const obj = await res.json();
        if(res.status < 300) {
            dispatch(groupsFetched(obj.result));
        } else if(res.status === FORBIDDEN_STATUS_CODE) {
            alert(obj.message);
        }
    } catch (e) {
        console.log(e);
    }
};

export const createGroup = (group, token) => async (dispatch) => {
    try {
        let res = await groupService.createGroup(group, token);
        await processResponseCode(dispatch, res, token);
    } catch(e) {
        console.log(e);
    }
};

export const updateGroup = (groupId, updates, token) => async (dispatch) => {
    try {
        let res = await groupService.updateGroup(groupId, updates, token);
        await processResponseCode(dispatch, res, token);
    } catch(e) {
        console.log(e);
    }
};

export const deleteGroup = (groupId, token) => async (dispatch) => {
    try {
        let res = await groupService.deleteGroup(groupId, token);
        await processResponseCode(dispatch, res, token);
    } catch(e) {
        console.log(e);
    }
};

const processResponseCode = async (dispatch, res, token) => {
    if(res.status < 300) {
        dispatch(fetchGroups(token));
    } else if(res.status === FORBIDDEN_STATUS_CODE) {
        processSessionTimeout();
    } else {
        const obj = await res.json();
        alert(obj.message);
    }
};