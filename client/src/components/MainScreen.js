import React, { Component } from 'react';
import { connect } from 'react-redux';
import MainScreenHeader from './MainScreenHeader';
import * as actions from '../actions';
import SideBar from './SideBar';
import { MY_INTERVIEWS_TAB } from '../actions/types';

class MainScreen extends Component{
    componentWillMount() {
        if (!this.props.menu.activeTab) {
            this.props.changeSelectedMenuTab(MY_INTERVIEWS_TAB);
        }
    }

    render() {
        if (!this.props.user || !this.props.menu) {
            return <div></div>;
        }
        return (
            <div className="row">
                <div className="col-md-3 text-center no-padding">
                    <SideBar changeSelectedMenuTab={this.props.changeSelectedMenuTab} activeTab={this.props.menu.activeTab}/>
                </div>
                <div className="col-md-9 no-padding">
                    <MainScreenHeader user={this.props.user} logoutUser={this.props.logoutUser} activeTabTitle={this.props.menu.title}/>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        user: state.auth.user,
        menu: state.menu
    }
}

export default connect(mapStateToProps, actions)(MainScreen);