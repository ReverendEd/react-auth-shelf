import axios from 'axios';

export function callItems() {
    console.log('works');
    return axios.get('/api/shelf').then(response => response.data)
    .catch((error) => { throw error; });
}

export function countItems() {
    return axios.get('/api/shelf/stats').then(response => {
        console.log(response.data);
        
        return response.data
    })
    .catch((error) => { throw error; });
}