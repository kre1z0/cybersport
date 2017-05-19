import React from 'react';
import SvgIcon from 'material-ui/SvgIcon';
import { coolGreyTwo, softGreen } from '../../assets/theme';

const ViewIcon = ({ isVisible, ...props }) => (
    <SvgIcon {...props} viewBox="0 0 16 11.3">
        <path
            fill={isVisible ? softGreen : coolGreyTwo}
            d="M8,8.3c-1.5,0-2.7-1.2-2.7-2.7C5.3,4.2,6.5,3,8,3s2.7,1.2,2.7,2.7C10.7,7.1,9.5,8.3,8,8.3z M8,4.7c-0.6,0-1,0.4-1,1
		s0.4,1,1,1s1-0.4,1-1S8.5,4.7,8,4.7z"
        />
        <path
            fill={isVisible ? softGreen : coolGreyTwo}
            d="M15.9,5.2C14.8,2.4,11.2,0,8,0C4.8,0,1.2,2.4,0.1,5.3c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0.1,0,0.1c0,0.1,0,0.1,0,0.2
		c0,0.1,0,0.1,0,0.2c0,0,0,0.1,0,0.1c0,0,0,0,0,0c0,0,0,0,0,0c1.1,2.9,4.7,5.3,7.9,5.3c3.2,0,6.8-2.4,7.9-5.2C16,6,16,5.8,16,5.7
		C16,5.5,16,5.4,15.9,5.2z M8,9.5c-2.3,0-5.2-1.8-6.1-3.9c1-2.1,3.8-3.9,6.1-3.9c2.3,0,5.2,1.8,6.1,3.9C13.2,7.7,10.3,9.5,8,9.5z"
        />
    </SvgIcon>
);

export default ViewIcon;
