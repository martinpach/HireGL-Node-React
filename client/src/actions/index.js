import axios from 'axios';
import { FETCH_USER, LOGIN_ERROR } from './types';

export function loginUser({ username, password }, callback) {
    return async dispatch => {
        try {
            const response = await axios.post('/api/auth/login', { username, password });
            localStorage.setItem('token', response.data.token);
            dispatch({ type: FETCH_USER, payload: response.data.user });
            callback();
        } catch (error) {
            dispatch({ type: LOGIN_ERROR, payload: 'Bad username or password' });
        }
    };
};
