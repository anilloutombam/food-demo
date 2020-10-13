import axios from 'axios'
import config from '../constants/config';

class Collections {
    getCollections(city_id) {
        return axios.get(`${config.API_URL}collections${city_id}`);
    }
}