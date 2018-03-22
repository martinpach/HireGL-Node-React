import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reducers from './reducers';
import App from './components/App';
import reduxThunk from 'redux-thunk';
import { AUTH_USER } from './actions/types';
import { getLoggedUser } from './utils';

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);
const store = createStoreWithMiddleware(reducers);
const loggedUser = getLoggedUser();
if (loggedUser) {
    store.dispatch({ type: AUTH_USER, payload: loggedUser });
}
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.querySelector('#root'));