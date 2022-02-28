import axios from 'axios';

export const baseURL = 'https://api.vhx.tv';
export const headers = {
    'Authorization' : `Basic cnUyenBXVlRHaE56RktxczJ5amlqeTlZZ0E4ajFkSlc6`
};


const instance = axios.create({
    baseURL,
    headers
});

export default instance;