import React from 'react';
import logo from '../../images/hiregl_logo.png';
import { MY_INTERVIEWS_TAB, NEW_INTERVIEW_TAB } from '../../actions/types';

export default (props) => {
    return (
        <div>
            <div className="row">
                <div className="col-md-12">
                    <div className="lightgreen" style={{ height: 150 }}>
                        <img src={logo} alt="hiregl-logo" style={{ marginTop: 30 }} />
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12">
                    <a className={"menu-link " + (props.activeTab === MY_INTERVIEWS_TAB ? 'selected-tab' : '')}
                        onClick={() => props.changeSelectedMenuTab(MY_INTERVIEWS_TAB)}>
                        My Interviews
                    </a>
                    <a className={"menu-link " + (props.activeTab === NEW_INTERVIEW_TAB ? 'selected-tab' : '')}
                        onClick={() => props.changeSelectedMenuTab(NEW_INTERVIEW_TAB)}>
                        New Interview
                    </a>
                </div>
            </div>
        </div>
    );
};
