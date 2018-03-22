import React, { Component } from 'react';
import { connect } from 'react-redux';
import MainScreenHeader from './MainScreenHeader';
import * as actions from '../actions';

class MainScreen extends Component{
    render() {
        if (!this.props.user) {
            return <div></div>;
        }
        return (
            <div className="col-md-9" style={{padding: 0}}>
                <MainScreenHeader user={this.props.user} logoutUser={this.props.logoutUser}/>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        user: state.auth.user
    }
}

export default connect(mapStateToProps, actions)(MainScreen);