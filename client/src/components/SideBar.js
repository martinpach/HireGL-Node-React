import React, { Component } from 'react';
import logo from '../images/hiregl_logo.png';

class SideBar extends Component{
    render() {
        return (
            <div className="col-md-3 text-center" style={{padding: 0}}>
                <div className="lightgreen" style={{height: 150}}>
                    <img src={logo} alt="hiregl-logo" style={{marginTop: 30}}/>
                </div>
                <a className="menu-link full-width">My Interviews</a>
                <a className="menu-link full-width">New Interview</a>
            </div>

        );
    }
}

export default SideBar;