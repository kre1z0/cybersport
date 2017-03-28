import React from 'react';
import Avatar from 'material-ui/Avatar';

import {BackIcon, UserIcon} from '../../components/icons';
import {silver} from '../../assets/theme'

import './SidebarProfile.css';

const avatarStyle = {
    width: '70px',
    height: '70px',
    backgroundColor: '#fff',
    boxShadow: '0 8px 15px 0 rgba(0, 0, 0, 0.07)'
};

const SidebarProfile = ({name, office, post, toggleSidebar}) => (

    <div className="sidebar-profile">

        <a className="back" onTouchTap={toggleSidebar}>
            <BackIcon style={{width: '20px', height: '14px'}} />
        </a>

        <div className="user-block">
            <Avatar icon={<UserIcon />} color={silver} style={avatarStyle} />
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
