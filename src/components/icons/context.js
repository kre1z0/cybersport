import React from 'react';
import SvgIcon from 'material-ui/SvgIcon';
import { coolGreyTwo, softGreen } from '../../assets/theme';

const ContextIcon = ({ isActive, ...props }) => (
    <SvgIcon {...props} viewBox="0 0 3 13">
        <circle
            fill={isActive ? softGreen : coolGreyTwo}
            cx="1.5"
            cy="1.5"
            r="1.5"
        />
        <circle
            fill={isActive ? softGreen : coolGreyTwo}
            cx="1.5"
            cy="6.5"
            r="1.5"
        />
        <circle
            fill={isActive ? softGreen : coolGreyTwo}
            cx="1.5"
            cy="11.5"
            r="1.5"
        />
    </SvgIcon>
);

export default ContextIcon;
