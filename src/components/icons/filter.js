import React from 'react';
import SvgIcon from 'material-ui/SvgIcon';
import { softGreen, coolGreyTwo } from '../../assets/theme';

const FilterIcon = ({ isActive, ...props }) => (
    <SvgIcon {...props} viewBox="0 0 14 10">
        <path
            fill={isActive ? softGreen : coolGreyTwo}
            d="M13,2H1C0.4,2,0,1.6,0,1s0.4-1,1-1h12c0.6,0,1,0.4,1,1S13.6,2,13,2z"
        />
        <path
            fill={isActive ? softGreen : coolGreyTwo}
            d="M11,6H3C2.4,6,2,5.6,2,5s0.4-1,1-1h8c0.6,0,1,0.4,1,1S11.6,6,11,6z"
        />
        <path
            fill={isActive ? softGreen : coolGreyTwo}
            d="M8,10H6c-0.6,0-1-0.4-1-1s0.4-1,1-1h2c0.6,0,1,0.4,1,1S8.6,10,8,10z"
        />
    </SvgIcon>
);

export default FilterIcon;
