import React from 'react';
import { darkGrey, coolGreyTwo } from '../../assets/theme';

const TabItem = ({ title, id, isActive, onSwitchTab }) => (
    <div
        onTouchTap={() => onSwitchTab(id)}
        style={{
            color: isActive ? darkGrey : coolGreyTwo,
            cursor: isActive ? 'default' : 'pointer',
        }}
        className="inspections-tabs-item"
    >
        {title}
    </div>
);

export default TabItem;
