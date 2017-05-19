import React from 'react';
import SvgIcon from 'material-ui/SvgIcon';
import { strongSilver, softGreen } from '../../assets/theme';

const HomeIcon = ({ isActive, ...props }) => (
    <SvgIcon {...props} viewBox="0 0 20 21">
        <path
            fill={isActive ? strongSilver : null}
            d="M13,21c-0.6,0-1-0.4-1-1v-6H8v6c0,0.6-0.4,1-1,1s-1-0.4-1-1v-7c0-0.6,0.4-1,1-1h6c0.6,0,1,0.4,1,1v7
		C14,20.6,13.6,21,13,21z"
        />
        <path
            fill={isActive ? strongSilver : null}
            d="M7,21.1H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h6c0.6,0,1,0.4,1,1S7.6,21.1,7,21.1z"
        />
        <path
            fill={isActive ? strongSilver : null}
            d="M19,21.1h-6c-0.6,0-1-0.4-1-1s0.4-1,1-1h6c0.6,0,1,0.4,1,1S19.6,21.1,19,21.1z"
        />
        <path
            fill={isActive ? softGreen : null}
            d="M20,9.5c0-0.1,0-0.2-0.1-0.2c0,0,0-0.1,0-0.1c0,0-0.1-0.1-0.1-0.1c0-0.1-0.1-0.2-0.2-0.2c0,0,0,0,0,0l-9-8.5
		c-0.4-0.4-1-0.4-1.4,0l-9,8.5c0,0,0,0,0,0C0.2,8.8,0.2,8.9,0.2,9c0,0-0.1,0.1-0.1,0.1c0,0,0,0.1,0,0.1C0,9.3,0,9.4,0,9.5
		c0,0,0,0,0,0v7.6c0,0.6,0.4,1,1,1s1-0.4,1-1V9.9l8-7.6l8,7.6v7.2c0,0.6,0.4,1,1,1s1-0.4,1-1L20,9.5C20,9.5,20,9.5,20,9.5z"
        />
    </SvgIcon>
);

export default HomeIcon;
