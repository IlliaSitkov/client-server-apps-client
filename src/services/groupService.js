const url = 'https://localhost:8766/api/group/';

export const fecthAllGroups = (token) => {
    return fetch(url, {
        method: 'GET',
        headers: {
            JWToken: token,
        }
    });
};

export const createGroup = (group, token) => {
    return fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            JWToken: token,
        },
        body: JSON.stringify(group)
    });
};

export const updateGroup = (groupId, updates, token) => {
    return fetch(url + groupId, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            JWToken: token,
        },
        body: JSON.stringify(updates)
    });
};

export const deleteGroup = (groupId, token) => {
    return fetch(url + groupId, {
        method: 'DELETE',
        headers: {
            JWToken: token,
        }
    });
}



