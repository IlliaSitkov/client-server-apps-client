const url = 'https://localhost:8766/login';

export const logIn = (credentials) => {
    console.log("Performing login");
    return fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(credentials)
    });
}