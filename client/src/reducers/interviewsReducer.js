import { FETCH_INTERVIEWS, FETCH_COUNT } from '../actions/types';

export default (state = {}, action) => {
    switch (action.type) {
        case FETCH_INTERVIEWS:
            return { ...state, interviews: action.payload };
        case FETCH_COUNT:
            return { ...state, numOfInterviews: action.payload };
        default:
            return state;
    }
};