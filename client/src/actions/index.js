import axios from 'axios';
import { LOGIN_ERROR, AUTH_USER, UNAUTH_USER, FETCH_USER, FETCH_INTERVIEWS } from './types';

const buildAuthHeader = () => {
    return {
        headers: { authentication: localStorage.getItem('token') }
    };
}

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
            await axios.get('/api/auth/logout', buildAuthHeader());
            localStorage.removeItem('token');
            dispatch({ type: UNAUTH_USER });
        } catch (error) {
            dispatch({ type: UNAUTH_USER });
        }
    }
};

export function fetchUserInfo() {
    return async dispatch => {
        try {
            const response = await axios.get('/api/auth/user', buildAuthHeader());
            dispatch({ type: FETCH_USER, payload: response.data });
        } catch (error) {
            dispatch({ type: UNAUTH_USER });
        }
    }
}

export function changeSelectedMenuTab(tab) {
   return {
       type: tab
   }
}

export function fetchInterviews(start = 0, limit = 5) {
    return async dispatch => {
        try {
            const response = await axios.get(`/api/interviews?start=${start}&limit=${limit}`, buildAuthHeader());
            dispatch({ type: FETCH_INTERVIEWS, payload: response.data });
        } catch (error) {
            dispatch({ type: UNAUTH_USER });
        }
    }
}