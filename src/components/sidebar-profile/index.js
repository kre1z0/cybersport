import React from 'react';
import Avatar from 'material-ui/Avatar';

import {BackIcon, UserIcon} from '../../components/icons';

import {silver} from '../../assets/theme'
import './SidebarProfile.scss';

const avatarStyle = {
    width: '70px',
    height: '70px',
    backgroundColor: '#fff',
    boxShadow: '0 8px 15px 0 rgba(0, 0, 0, 0.07)'
};

const SidebarProfile = ({full_name, tb_name, role_name, toggleSidebar}) => (

    <div className="sidebar-profile">

        <a className="back" onTouchTap={toggleSidebar}>
            <BackIcon style={{width: '20px', height: '14px'}} />
        </a>

        <div className="user-block">
            <Avatar icon={<UserIcon />} color={silver} style={avatarStyle} />
            <div className="user-info">
                <p className="user-name">{full_name}</p>
                <p className="user-office">{tb_name}</p>
                <p className="user-post">{role_name}</p>
            </div>
        </div>

        <a className="logout">Выход</a>

    </div>

);

export default SidebarProfile;
