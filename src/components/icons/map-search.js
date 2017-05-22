import React from 'react';
import SvgIcon from 'material-ui/SvgIcon';
import { darkGrey } from '../../assets/theme';

const MapSearch = ({ ...props }) => (
    <SvgIcon {...props} viewBox="0 0 16 16">
        <path
            fill={darkGrey}
            d="M15.63,14.22l-3-3a1,1,0,0,0-.21-.14A6.84,6.84,0,0,0,6.93.08h0a6.85,6.85,0,0,0,0,13.7A6.79,6.79,0,0,0,11,12.39a1,1,0,0,0,.14.21l3,3a1,1,0,0,0,1.42-1.41ZM6.93,12.08a5.15,5.15,0,0,1,0-10.3h0a5.15,5.15,0,0,1,0,10.3Z"
        />
    </SvgIcon>
);

export default MapSearch;
