import React from 'react';

export default (props) => {
    return (
        <div className="lightgrey" style={{height: 150}}>
            <button className="pull-right" onClick={props.logoutUser}>-></button>
            <span className="pull-right">{props.user.firstName} {props.user.lastName}</span>
        </div>
    );
}