import axios from 'axios';

export function callItems() {
    console.log('works');
    return axios.get('/api/shelf').then(response => response.data)
    .catch((error) => { throw error; });
}