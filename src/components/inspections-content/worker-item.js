import React from 'react';
import IconButton from 'material-ui/IconButton';
import { ContextIcon } from '../../components/icons';
import Avatar from 'material-ui/Avatar';

import './worker-item.scss';

const avatarStyle = {
    height: 46,
    width: 46,
};

const iconStyle = {
    height: 13,
    width: 13,
};

const WorkerItem = ({ img, id, fullName }) => (
    <div className="worker-item">
        <IconButton iconStyle={iconStyle} className="control-button">
            <ContextIcon isActive={true} />
        </IconButton>
        <div className="id">
            {id}
        </div>
        <Avatar style={avatarStyle} src={img} />
        <div className="full-name">
            {fullName}
        </div>
    </div>
);

export default WorkerItem;
