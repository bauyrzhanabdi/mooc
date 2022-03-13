import { useState} from 'react';

export default function useAuth () {
    const getToken = () => {
        const tokenFromStorage: string | null = localStorage.getItem('token');
        return tokenFromStorage;
    }
    const [token, setToken] = useState(getToken());
    return token;
}