import axios from 'axios';

export function loginUser({ username, password }) {
    return (dispatch) => {
        axios.post('/api/auth/login', { username, password });
    };
};