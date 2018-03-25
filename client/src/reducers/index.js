import { combineReducers } from 'redux';
import AuthReducer from './authReducer';
import MenuReducer from './menuReducer';
import InterviewsReducer from './interviewsReducer';
import { reducer as FormReducer } from 'redux-form';

const rootReducer = combineReducers({
    auth: AuthReducer,
    menu: MenuReducer,
    interviews: InterviewsReducer,
    form: FormReducer
});

export default rootReducer;