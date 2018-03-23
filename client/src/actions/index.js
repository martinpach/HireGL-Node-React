import axios from 'axios';
import { LOGIN_ERROR, AUTH_USER, UNAUTH_USER } from './types';
import { getLoggedUserToken } from '../utils';

export function loginUser({ username, password }, callback) {
    return async dispatch => {
        try {
            const response = await axios.post('/api/auth/login', { username, password });
            localStorage.setItem('user', JSON.stringify(response.data));
            dispatch({ type: AUTH_USER, payload: response.data.user });
            callback();
        } catch (error) {
            dispatch({ type: LOGIN_ERROR, payload: 'Bad username or password' });
        }
    };
};

export function logoutUser() {
    return async dispatch => {
        try {
            await axios.get('/api/auth/logout', { headers: { authentication: getLoggedUserToken() } });
            localStorage.removeItem('user');
            dispatch({ type: UNAUTH_USER });
        } catch (error) {

        }
    }
};

export function changeSelectedMenuTab(tab) {
   return {
       type: tab
   }
}