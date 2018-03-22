import { LOGIN_ERROR, AUTH_USER, UNAUTH_USER } from '../actions/types';

export default (state = {}, action) => {
    switch (action.type) {
        case AUTH_USER:
            return { isAuthenticated: true, user: action.payload };
        case UNAUTH_USER:
            return { isAuthenticated: false, user: {} };
        case LOGIN_ERROR:
            return { ...state, loginError: action.payload };
        default:
            return state;
    }
};