import React from 'react';

import Phones from '../components/Phones';
import logo from '../images/logo-sidebar.png'

const Sidebar = () => {
    return (
        <div className="sidebar-container">
            <div className="sidebar-header-container">
                <div className="">
                    <img src={logo} alt="logo" />
                </div>
            </div>
            <div className="sidebar-list-container">
                <Phones />
            </div>
        </div>
    )
}

export default Sidebar;