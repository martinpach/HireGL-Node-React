import { MY_INTERVIEWS_TAB, NEW_INTERVIEW_TAB } from "../actions/types";

export default (state = {}, action) => {

    switch(action.type) {
        case MY_INTERVIEWS_TAB:
            return { activeTab: MY_INTERVIEWS_TAB, title: 'My Interviews' };
        case NEW_INTERVIEW_TAB:
            return { activeTab: NEW_INTERVIEW_TAB, title: 'New Interview' };
        default:
            return state;
    }
};