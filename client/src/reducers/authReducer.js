import { LOGIN_ERROR, AUTH_USER, UNAUTH_USER } from '../actions/types';

export default (state = {}, action) => {
    console.log(state);
    switch (action.type) {
        case AUTH_USER:
            return { isAuthenticated: true };
        case UNAUTH_USER:
            return { isAuthenticated: false };
        case LOGIN_ERROR:
            return { ...state, loginError: action.payload };
        default:
            return state;
    }
};