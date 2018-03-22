import React, { Component } from 'react';
import logo from '../images/hiregl_logo.png';
import { Field, reduxForm } from 'redux-form';
import LoginField from './LoginField';
import * as actions from '../actions';
import { connect } from 'react-redux';

class LoginForm extends Component {
    componentWillMount() {
        if (this.props.isAuthenticated) {
            this.props.history.push('/home');
        }
    }

    handleFormSubmit(values) {
        this.props.loginUser(values, () => this.props.history.push('/home'));
    };

    render() {
        return (
            <div className="col-md-4 col-md-offset-4">
                <div className="lightgreen text-center">
                    <img src={logo} alt="hiregl-logo"/>
                </div>
                <form onSubmit={this.props.handleSubmit(this.handleFormSubmit.bind(this))}>
                    <Field
                        type="text"
                        name="username"
                        label="username"
                        component={LoginField}
                    />
                    <Field
                        type="password"
                        name="password"
                        label="password"
                        component={LoginField}
                    />
                    <div className="text-danger">{this.props.loginError}</div>
                    <button type="submit" className="btn btn-success">Submit</button>
                </form>
            </div>
        );
    };
};

const validate = values => {
    const errors = {};
    if (!values.username) {
        errors.username = 'You must provide a username';
    }
    if (!values.password) {
        errors.password = 'You must provide a password';
    }

    return errors;
};

const mapStateToProps = state => {
    return {
        isAuthenticated: state.auth.isAuthenticated,
        loginError: state.auth.loginError
    }
}

export default reduxForm({
    validate,
    form: 'LoginForm'
})(
    connect(mapStateToProps, actions)(LoginForm)
);
