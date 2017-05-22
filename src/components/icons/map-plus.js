import React from 'react';
import SvgIcon from 'material-ui/SvgIcon';
import { darkGrey } from '../../assets/theme';

const MapPlus = ({ ...props }) => (
    <SvgIcon {...props} viewBox="0 0 16 16">
        <path
            fill={darkGrey}
            d="M15,7H9V1A1,1,0,0,0,7,1V7H1A1,1,0,0,0,1,9H7v6a1,1,0,0,0,2,0V9h6a1,1,0,0,0,0-2Z"
        />
    </SvgIcon>
);

export default MapPlus;
