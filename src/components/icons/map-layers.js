import React from 'react';
import SvgIcon from 'material-ui/SvgIcon';
import { softGreen, darkGrey } from '../../assets/theme';

const MapLayers = ({ isActive, ...props }) => (
    <SvgIcon {...props} viewBox="0 0 16 15">
        <path
            fill={isActive ? softGreen : darkGrey}
            d="M15.5,9.26,12.43,7.5,15.5,5.74a.85.85,0,0,0,0-1.47L8.42.19a.85.85,0,0,0-.85,0L.5,4.26a.85.85,0,0,0,0,1.47L3.57,7.5.5,9.26a.85.85,0,0,0,0,1.47l7.07,4.07a.85.85,0,0,0,.85,0l7.07-4.07a.85.85,0,0,0,0-1.47ZM8,1.91,13.37,5,8,8.09,2.63,5ZM8,13.09,2.63,10,5.27,8.48l2.3,1.33a.85.85,0,0,0,.85,0l2.3-1.33L13.37,10Z"
        />
    </SvgIcon>
);

export default MapLayers;
