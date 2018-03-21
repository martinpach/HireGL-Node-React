import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Switch } from 'react-router-dom';
import LoginForm from './LoginForm';
import Home from './Home';

const App = () => {
    return (
        <BrowserRouter>
            <div className="container">
                <Switch>
                    <Route path="/home" component={Home} />
                    <Route path="/" component={LoginForm} />
                </Switch>
            </div>
        </BrowserRouter>
    );
};

export default App;