import React, { Component } from 'react';
import { connect } from 'react-redux';
import MainScreenHeader from './MainScreenHeader';
import * as actions from '../actions';
import SideBar from './SideBar';

class MainScreen extends Component{
    render() {
        if (!this.props.user) {
            return <div></div>;
        }
        return (
            <div className="row">
                <div className="col-md-3 text-center no-padding">
                    <SideBar changeSelectedMenuTab={this.props.changeSelectedMenuTab}/>
                </div>
                <div className="col-md-9 no-padding">
                    <MainScreenHeader user={this.props.user} logoutUser={this.props.logoutUser}/>
                </div>
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