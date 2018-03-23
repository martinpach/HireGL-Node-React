import React from 'react';

export default (props) => {
    return (
        <div className="lightgrey" style={{ height: 150 }}>
            <a className="logout-button pull-right" onClick={props.logoutUser}>-></a>
            <span className="pull-right">{props.user.firstName} {props.user.lastName}</span>
            <div className="clearfix" />
            <h1 style={{margin: 50}}>{props.selectedTabTitle}</h1>
        </div>
    );
}