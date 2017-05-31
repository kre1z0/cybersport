import React from 'react';
import SvgIcon from 'material-ui/SvgIcon';
import { coolGreyTwo } from '../../assets/theme';

const RedoIcon = ({ disabled, ...props }) => (
    <SvgIcon {...props} viewBox="0 0 16 10">
        <path
            fill={disabled ? 'rgba(157, 163, 170, 0.5)' : coolGreyTwo}
            d="M15.9,5.3c0,0,0-0.1,0-0.1c0,0,0-0.1,0-0.1c0,0,0,0,0-0.1s0,0,0-0.1c0,0,0-0.1,0-0.1c0,0,0-0.1,0-0.1c0,0,0-0.1,0-0.1
	c0,0,0-0.1-0.1-0.1c0,0,0-0.1,0-0.1c0,0,0,0,0,0c0,0-0.1-0.1-0.1-0.1c0,0,0,0,0,0l-5-4c-0.4-0.3-1.1-0.3-1.4,0.2
	C8.9,0.8,8.9,1.4,9.4,1.8L12.1,4H5C2.2,4,0,6.2,0,9c0,0.6,0.4,1,1,1s1-0.4,1-1c0-1.7,1.3-3,3-3h7.1L9.4,8.2c-0.4,0.3-0.5,1-0.2,1.4
	C9.4,9.9,9.7,10,10,10c0.2,0,0.4-0.1,0.6-0.2l5-4c0,0,0,0,0,0c0,0,0.1-0.1,0.1-0.1c0,0,0,0,0,0c0,0,0-0.1,0-0.1c0,0,0.1-0.1,0.1-0.1
	C15.9,5.4,15.9,5.4,15.9,5.3z"
        />
    </SvgIcon>
);

export default RedoIcon;
