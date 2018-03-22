import React from 'react';

export default (props) => {
    return (
        <div style={{backgroundColor: '#f7f7f7', height: 150}}>
            <button style={{float: 'right'}} onClick={props.logoutUser}>-></button>
            <span style={{float: 'right'}}>{props.user.firstName} {props.user.lastName}</span>
        </div>
    );
}