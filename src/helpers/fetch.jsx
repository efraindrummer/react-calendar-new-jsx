const baseUrl = process.env.REACT_APP_API_URL;

export const fetchSinToken = (endpoint, data, method = 'GET') => {
    //añado el localhost y pongo el endpoint respectivo para que no se me olvide que se hace aqui jajaja
    const url = `${ baseUrl }/${ endpoint }`;

    if(method === 'GET'){
        return fetch(url);
    }else{
        return fetch(url, {
            method,
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(data)
        });
    }
}

export const fetchConToken = (endpoint, data, method = 'GET') => {
    //añado el localhost y pongo el endpoint respectivo para que no se me olvide que se hace aqui jajaja
    const url = `${ baseUrl }/${ endpoint }`;
    const token = localStorage.getItem('token') || '';

    if(method === 'GET'){
        return fetch(url, {
            method,
            headers: {
                'x-token': token
            }
        })
    }else{
        return fetch(url, {
            method,
            headers: {
                'Content-type': 'application/json',
                'x-token': token
            },
            body: JSON.stringify(data)
        });
    }
}