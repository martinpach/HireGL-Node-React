import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Switch } from 'react-router-dom';
import Login from './Login';

const App = () => {
    return (
        <BrowserRouter>
            <div className="container">
                <Switch>
                    <Route path="/" component={Login} />
                </Switch>
            </div>
        </BrowserRouter>
    );
};

export default App;