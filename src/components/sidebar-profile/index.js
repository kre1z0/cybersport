import React from 'react';

import './SidebarProfile.css';
import {BackIcon, UserIcon} from '../../components/icons';

const SidebarProfile = ({name, office, post, toggleSidebar}) => (

    <div className="sidebar-profile">

        <a className="back" onTouchTap={toggleSidebar}>
            <BackIcon style={{width: '20px', height: '14px'}} />
        </a>

        <div className="user-block">
            <div className="user-avatar">
                <UserIcon />
            </div>
            <div className="user-info">
                <p className="user-name">{name}</p>
                <p className="user-office">{office}</p>
                <p className="user-post">{post}</p>
            </div>
        </div>

        <a className="logout">Выход</a>

    </div>

);

export default SidebarProfile;
