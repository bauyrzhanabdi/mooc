import API from '../API';
import axios from 'axios';
export default async function loginService(form: any) {
        // document.cookie = 'token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTI0YTUyNGUxY2Y4YzJmYjQ4ZjA3NGIiLCJpYXQiOjE2MzAwNDIzMzUsImV4cCI6MTYzMDY0NzEzNX0.31CnE-8gmyrYTw65BUl6EBaKsq_mHhTAlJyY7WSOf8A; Path=/;'
        return await API.post('login', form);
}