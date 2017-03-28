import React, {PropTypes} from 'react';
import IconButton from 'material-ui/IconButton';

import {BackIcon, UserIcon} from '../../components/icons';

import './SidebarProfile.css';

const SidebarProfile = ({name, office, post, toggleSidebar}) => (

    <div className="sidebar-profile">

        <a className="back" onTouchTap={toggleSidebar}>
            <IconButton>
                <BackIcon style={{width: '20px', height: '14px'}} />
            </IconButton>
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

SidebarProfile.propTypes = {
    name: PropTypes.string.isRequired,
    office: PropTypes.string.isRequired,
    post: PropTypes.string.isRequired,
    avatar: PropTypes.string
};

export default SidebarProfile;
