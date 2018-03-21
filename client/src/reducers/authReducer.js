import { FETCH_USER, LOGIN_ERROR } from '../actions/types';

export default (state = {}, action) => {
    switch (action.type) {
        case FETCH_USER:
            return { ...state, user: action.payload };
        case LOGIN_ERROR:
            return { ...state, loginError: action.payload };
        default:
            return state;
    }
};