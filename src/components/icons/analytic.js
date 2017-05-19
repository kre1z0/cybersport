import React from 'react';
import SvgIcon from 'material-ui/SvgIcon';
import { silver, strongSilver, softGreen } from '../../assets/theme';

const AnalyticIcon = ({ isActive, ...props }) => (
    <SvgIcon {...props} viewBox="0 0 25 23">
        <path
            fill={isActive ? strongSilver : silver}
            d="M23.4,23h-3.9c-0.9,0-1.6-0.7-1.6-1.5v-13C18,7.7,18.7,7,19.6,7h3.9C24.3,7,25,7.7,25,8.5v13
		C25,22.3,24.3,23,23.4,23z M20,21h3V9h-3V21z"
        />
        <path
            fill={isActive ? softGreen : silver}
            d="M5.4,23H1.6C0.7,23,0,22.3,0,21.5v-7.9C0,12.7,0.7,12,1.6,12h3.9C6.3,12,7,12.7,7,13.5v7.9
		C7,22.3,6.3,23,5.4,23z M2,21h3v-7H2V21z"
        />
        <path
            fill={isActive ? softGreen : silver}
            d="M14.4,23h-3.9C9.7,23,9,22.3,9,21.5v-20C9,0.7,9.7,0,10.6,0h3.9C15.3,0,16,0.7,16,1.5v20
		C16,22.3,15.3,23,14.4,23z M11,21h3V2h-3V21z"
        />
    </SvgIcon>
);

export default AnalyticIcon;
