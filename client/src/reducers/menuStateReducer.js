import { MY_INTERVIEWS_TAB, NEW_INTERVIEW_TAB } from "../actions/types";

export default (state = {}, action) => {

    if (action.type === MY_INTERVIEWS_TAB || NEW_INTERVIEW_TAB) {
        return { activeTab: action.type }
    }
    return state;
};