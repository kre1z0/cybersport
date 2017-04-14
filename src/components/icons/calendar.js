import React from 'react';
import SvgIcon from 'material-ui/SvgIcon';
import {silver, strongSilver, softGreen} from '../../assets/theme';

const Calendar = ({isActive, ...props}) => (
    <SvgIcon {...props} viewBox="0 0 11 12">
        <polygon fill={isActive ? strongSilver : silver} points="9,1 9,0 8,0 8,1 3,1 3,0 2,0 2,1 0,1 0,3 11,3 11,1 	"/>
        <rect fill={isActive ? strongSilver : silver} y="10" width="2" height="2"/>
        <rect fill={isActive ? strongSilver : silver} x="3" y="10" width="2" height="2"/>
        <rect fill={isActive ? strongSilver : silver} x="6" y="10" width="2" height="2"/>
        <rect fill={isActive ? strongSilver : silver} x="9" y="10" width="2" height="2"/>
        <rect fill={isActive ? strongSilver : silver} y="7" width="2" height="2"/>
        <rect fill={isActive ? strongSilver : silver} x="3" y="7" width="2" height="2"/>
        <rect fill={isActive ? strongSilver : silver} x="6" y="7" width="2" height="2"/>
        <rect fill={isActive ? strongSilver : silver} x="9" y="7" width="2" height="2"/>
        <rect fill={isActive ? strongSilver : silver} y="4" width="2" height="2"/>
        <rect fill={isActive ? strongSilver : silver} x="3" y="4" width="2" height="2"/>
        <rect fill={isActive ? strongSilver : silver} x="6" y="4" width="2" height="2"/>
        <rect fill={isActive ? strongSilver : silver} x="9" y="4" width="2" height="2"/>
    </SvgIcon>
);

export default Calendar;

