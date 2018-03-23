import { combineReducers } from 'redux';
import AuthReducer from './authReducer';
import MenuReducer from './menuReducer';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
    auth: AuthReducer,
    menu: MenuReducer,
    form: formReducer
});

export default rootReducer;