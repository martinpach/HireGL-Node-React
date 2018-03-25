import { FETCH_INTERVIEWS } from '../actions/types';

export default (state = {}, action) => {
    switch (action.type) {
        case FETCH_INTERVIEWS:
            return { ...state, interviews: action.payload };
        default:
            return state;
    }
};