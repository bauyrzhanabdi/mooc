import axios from 'axios';
import { BACK_URL } from '../config';

export default axios.create({
    baseURL: BACK_URL,
    responseType: 'json'
});

axios.interceptors.response.use(
    function(response) {
        // 2XX
        return response;
    },
    function(err) {
        // !2XX
        const res = err.response;
        console.warn(res.status);
        if ( res.status === 401 ) {
            console.warn('401');
        }
        return
    }
)