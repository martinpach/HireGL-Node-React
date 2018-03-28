import axios from 'axios';
import { LOGIN_ERROR, AUTH_USER, UNAUTH_USER, FETCH_USER, FETCH_INTERVIEWS, FETCH_COUNT } from './types';
import Cache from '../utils/Cache';
import config from '../config';

const cache = new Cache({ invalidateAfter: 60000 });

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
            cache.invalidateCache();
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

export function fetchInterviews(start = 0, limit = config.interviewsPerPage) {
    return async dispatch => {
        try {
            const cacheKey = `${start}-${limit}`;
            const cachedInterviews = cache.getFromCache(cacheKey);
            if (cachedInterviews) {
                return dispatch({ type: FETCH_INTERVIEWS, payload: cachedInterviews });
            }

            const response = await axios.get(`/api/interviews?start=${start}&limit=${limit}`, buildAuthHeader());
            cache.addToCache(cacheKey, response.data);
            dispatch({ type: FETCH_INTERVIEWS, payload: response.data });
        } catch (error) {
            dispatch({ type: UNAUTH_USER });
        }
    }
}

export function fetchNumberOfInterviews() {
    return async dispatch => {
        try {
            const response = await axios.get('/api/interviews/count', buildAuthHeader());
            dispatch({ type: FETCH_COUNT, payload: response.data.count });
        } catch (error) {
            dispatch({ type: UNAUTH_USER });
        }
    }
}