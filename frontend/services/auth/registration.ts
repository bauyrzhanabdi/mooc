import API from '../API';
import { toast } from 'react-toastify';

export default async function registerService (form: any) {
    return await API.post('register', form);
}