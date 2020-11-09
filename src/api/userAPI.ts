import axios from 'axios';

// var apiClient = axios.create({
//     baseURL: 'https://jsonplaceholder.typicode.com/',
//     timeout: 500,
//     headers: {'Content-Type': 'application/json'}
//   });

// const API_URL = 'https://randomapi.com/api/6de6abfedb24f889e0b5f675edc50deb?fmt=raw&sole'
const API_URL = 'https://jsonplaceholder.typicode.com/users'

const handleFetchAllUsers = async () => {
    return await axios.get(API_URL)
    .then(response => {
        return response.data;
    })
    .catch(err => {
        console.error('Error get current user:', err);
        throw err;
    });
}

export { handleFetchAllUsers }