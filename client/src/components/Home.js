import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

class Home extends Component {
    render() {
        return (
            <div>
                <button type="button" className="btn btn-danger" onClick={this.props.logoutUser}>Logout</button>
            </div>
        );
    }
}

export default connect(null, actions)(Home);