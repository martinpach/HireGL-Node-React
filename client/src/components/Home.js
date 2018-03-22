import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

class Home extends Component {
    render() {
        if (!this.props.user) {
            return <div>Loading</div>;
        }
        return (
            <div>
                <h1>Hello {this.props.user.firstName}</h1>
                <button type="button" className="btn btn-danger" onClick={this.props.logoutUser}>Logout</button>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        user: state.auth.user
    };
}

export default connect(mapStateToProps, actions)(Home);