import React from 'react';
import './SidebarProfile.css';

import {UndoIcon, UserIcon} from '../../components/icons';

const SidebarProfile = ({name, office, post}) => (

    <div className="sidebar-profile">

        <a className="back">
            <UndoIcon />
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
