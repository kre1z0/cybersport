import React from 'react';
import { darkGrey, coolGreyTwo } from '../../assets/theme';

const TabItem = ({ title, isActive }) => (
    <div
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
