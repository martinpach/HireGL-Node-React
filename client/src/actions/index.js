import axios from 'axios';
import { LOGIN_ERROR, AUTH_USER, UNAUTH_USER } from './types';

export function loginUser({ username, password }, callback) {
    return async dispatch => {
        try {
            const response = await axios.post('/api/auth/login', { username, password });
            localStorage.setItem('token', response.data.token);
            dispatch({ type: AUTH_USER });
            callback();
        } catch (error) {
            dispatch({ type: LOGIN_ERROR, payload: 'Bad username or password' });
        }
    };
};

export function logoutUser() {
    return async dispatch => {
        try {
            await axios.get('/api/auth/logout', { headers: { authentication: localStorage.getItem('token') } });
            localStorage.removeItem('token');
            dispatch({ type: UNAUTH_USER });
        } catch (error) {

        }
    }
}
