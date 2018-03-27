import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../components/main_screen/Header';
import * as actions from '../actions';
import SideBar from '../components/main_screen/SideBar';
import { MY_INTERVIEWS_TAB } from '../actions/types';
import InterviewsTable from '../components/main_screen/table/InterviewsTable';

class MainScreen extends Component {
    componentWillMount() {
        this.props.fetchUserInfo();
        this.props.fetchInterviews();
        this.props.fetchNumberOfInterviews();
        if (!this.props.menu.activeTab) {
            this.props.changeSelectedMenuTab(MY_INTERVIEWS_TAB);
        }
    }

    renderConditionally() {
        if (this.props.menu.activeTab === MY_INTERVIEWS_TAB) {
            return <InterviewsTable interviews={this.props.interviews}/>;
        } 
        // TODO: NEW_INTERVIEW_TAb
    }

    render() {
        if (!this.props.user || !this.props.menu) {
            return <div></div>;
        }

        return (
            <div className="row">
                <div className="col-md-3 text-center no-padding right-shadow full-height">
                    <SideBar changeSelectedMenuTab={this.props.changeSelectedMenuTab} activeTab={this.props.menu.activeTab} />
                </div>
                <div className="col-md-9 no-padding">
                    <div className="row">
                        <div className="col-md-12">
                            <Header user={this.props.user} logoutUser={this.props.logoutUser} activeTabTitle={this.props.menu.title} />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            {this.renderConditionally()}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        user: state.auth.user,
        menu: state.menu,
        interviews: state.interviews
    }
}

export default connect(mapStateToProps, actions)(MainScreen);