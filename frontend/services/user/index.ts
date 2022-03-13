import API from '../API';

export default async function userService() {
    return await API.get('current-user', { withCredentials: true });
}