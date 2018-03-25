import React from 'react';

export default (props) => {
    return (
        <div className="lightgrey" style={{ height: 150 }}>
            <div className="row">
                <div className="col-md-12">
                    <a className="logout-button float-right" onClick={props.logoutUser}>-></a>
                    <span className="float-right">{props.user.firstName} {props.user.lastName}</span>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12">
                    <h1 className="m-5 responsive-h1">{props.activeTabTitle}</h1>
                </div>
            </div>
        </div>
    );
}