import React from 'react';
import SvgIcon from 'material-ui/SvgIcon';
import { darkGrey } from '../../assets/theme';

const MapMinus = ({ ...props }) => (
    <SvgIcon {...props} viewBox="0 0 16 2">
        <path fill={darkGrey} d="M15,0H1A1,1,0,0,0,1,2H15a1,1,0,0,0,0-2Z" />
    </SvgIcon>
);

export default MapMinus;
