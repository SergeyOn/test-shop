import axios from 'axios';

const BASE_URL = 'https://api.predic8.de/shop/products/';

export const getProducts = (id = '') => {
    return axios.get(
      BASE_URL+id, 
      null, {
      headers: {
        'Accept: application/json' : 'https://api.predic8.de:443/shop/products/'
      }
    });
};