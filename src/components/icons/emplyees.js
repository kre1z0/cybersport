import React from 'react';
import SvgIcon from 'material-ui/SvgIcon';
import { strongSilver, softGreen } from '../../assets/theme';

const AnalyticIcon = ({ isActive, ...props }) => (
    <SvgIcon {...props} viewBox="0 0 24 16">
        <path
            fill={isActive ? softGreen : null}
            d="M10.8,7.5c0.7-0.8,1.2-1.9,1.2-3C12,2,10,0,7.5,0S3,2,3,4.5c0,1.2,0.5,2.2,1.2,3C1.7,8.4,0,10.1,0,12.1v2.2
		C0,14.8,0.4,16,1.4,16h12.3c0.8,0,1.3-0.7,1.3-1.7v-2.2C15,10.1,13.3,8.4,10.8,7.5z M5,4.5C5,3.1,6.1,2,7.5,2S10,3.1,10,4.5
		C10,5.9,8.9,7,7.6,7c0,0-0.1,0-0.1,0S7.4,7,7.4,7C6.1,7,5,5.9,5,4.5z M13,14H2v-1.9C2,10.6,4.2,9,7.4,9c0,0,0,0,0.1,0s0,0,0.1,0
		c3.2,0,5.4,1.6,5.4,3.1V14z"
        />
        <path
            fill={isActive ? strongSilver : null}
            d="M21,9.1c0.5-0.7,0.9-1.5,0.9-2.4c0-2.1-1.7-3.8-3.8-3.8s-3.8,1.7-3.8,3.8c0,2.1,1.7,3.8,3.8,3.8c0,0,0,0,0,0
		c2.3,0,4,1.2,4,2.2V14h-4c-0.6,0-1,0.4-1,1s0.4,1,1,1h4.8c0.6,0,1.2-0.5,1.2-1.6v-1.7C24,11.1,22.8,9.8,21,9.1z M16,6.7
		c0-1.1,0.9-2,2-2s2,0.9,2,2s-0.9,2-2,2S16,7.8,16,6.7z"
        />
    </SvgIcon>
);

export default AnalyticIcon;
