import React, { Component } from 'react';
import { connect } from 'react-redux';

export default function(MyComponent) {
    class Authentication extends Component {
        componentWillMount() {
            if (!this.props.isAuthenticated) {
                this.props.history.push('/');
            }
        }

        componentWillUpdate(nextProps) {
            if (!nextProps.isAuthenticated) {
                this.props.history.push('/');
            }
        }

        render() {
            return <MyComponent {...this.props} />
        }
    }

    const mapStateToProps = state => {
        return { isAuthenticated: state.auth.isAuthenticated };
    }

    return connect(mapStateToProps)(Authentication);
}