import axios from 'axios';
import { AUTH_USER, UNAUTH_USER, FETCH_USER } from './types';

export function loginUser({ username, password }) {
    return async (dispatch) => {
        const response = await axios.post('/api/auth/login', { username, password });
        localStorage.setItem('token', response.data.token);
        dispatch({ type: AUTH_USER });
        // dispatch({ type: FETCH_USER, payload: response.data.user });
    };
};
