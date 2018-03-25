import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Switch } from 'react-router-dom';
import LoginForm from './login/LoginForm';
import requireAuthentication from './hoc/RequireAuthentication';
import MainScreen from '../containers/MainScreen';

const App = () => {
    return (
        <BrowserRouter>
            <div className="container-fluid">
                <Switch>
                    <Route path="/home" component={requireAuthentication(MainScreen)} />
                    <Route path="/" component={LoginForm} />
                </Switch>
            </div>
        </BrowserRouter>
    );
};

export default App;