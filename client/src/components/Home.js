import React from 'react';
import SideBar from './SideBar';
import MainScreen from './MainScreen';

export default () => {
    return (
        <div>
            <div className="row">
                <SideBar />
                <MainScreen />
            </div>
        </div>
    );
}