import React from 'react';
import SvgIcon from 'material-ui/SvgIcon';
import { silver, strongSilver, softGreen } from '../../assets/theme';

const ObjectsIcon = ({ isActive, ...props }) => (
    <SvgIcon {...props} viewBox="0 0 24 22">
        <path
            fill={isActive ? strongSilver : silver}
            d="M14,12l0,1.9c0,0,0,0.1,0,0.1h-4c0,0,0,0,0-0.1V12H8v1.9C8,14.6,8.5,16,9.6,16h4.8c1.1,0,1.6-1.4,1.6-2.1V12
		H14z"
        />
        <path
            fill={isActive ? softGreen : silver}
            d="M24,5.2C24,3.6,23.7,3,22,3h-5V1.5C17,0.7,16.3,0,15.4,0H8.6C7.7,0,7,0.7,7,1.5V3H2C0.3,3,0,3.6,0,5.2V7
		c0,1.2,0,2.9,1,3.9c0,0,0,0,0,0.1v9.4C1,21.1,1.6,22,2.5,22h19c0.9,0,1.5-0.9,1.5-1.6V11c0-0.1,0-0.1,0-0.2c1-1.2,1-3,1-3.8V5.2z
		 M9,2h6v1H9V2z M2,5.2C2,5.1,2,5.1,2,5h6.6h6.9H22c0,0.1,0,0.1,0,0.2V7c0,3-1.1,3-2,3H4c-1.9,0-2-0.8-2-3V5.2z M3,20v-8.1
		C3.3,12,3.6,12,4,12h16c0.4,0,0.7,0,1-0.1V20H3z"
        />
    </SvgIcon>
);

export default ObjectsIcon;
