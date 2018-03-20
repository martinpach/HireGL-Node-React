import React, { Component } from 'react';
import logo from '../images/hiregl_logo.png';
import { Field, reduxForm } from 'redux-form';
import LoginField from './LoginField';
import { loginUser } from '../actions';
import { bindActionCreators } from 'redux';

class Login extends Component {
    handleFormSubmit(values) {
        this.props.loginUser(values);
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
                        type="text"
                        name="password"
                        label="password"
                        component={LoginField}
                    />
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

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ loginUser }, dispatch);
}

export default reduxForm({
    validate,
    form: 'LoginForm'
}, null, mapDispatchToProps)(Login);