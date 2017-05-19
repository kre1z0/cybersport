import React from 'react';
import SvgIcon from 'material-ui/SvgIcon';
import { silver, strongSilver, softGreen } from '../../assets/theme';

const InspectionsIcon = ({ isActive, ...props }) => (
    <SvgIcon {...props} viewBox="0 0 23 23">
        <path
            fill={isActive ? softGreen : silver}
            d="M21.5,23h-20C0.7,23,0,22.3,0,21.5v-6.6c0-0.6,0.4-1,1-1s1,0.4,1,1V21h19v-5.9c0-0.6,0.4-1,1-1s1,0.4,1,1v6.4
		C23,22.3,22.3,23,21.5,23z"
        />
        <path
            fill={isActive ? softGreen : silver}
            d="M22,8.1c-0.6,0-1-0.4-1-1V2H2v4.9c0,0.6-0.4,1-1,1s-1-0.4-1-1V1.5C0,0.7,0.7,0,1.5,0h20C22.3,0,23,0.7,23,1.5
		v5.6C23,7.7,22.6,8.1,22,8.1z"
        />
        <path
            fill={isActive ? strongSilver : silver}
            d="M12,16C12,16,12,16,12,16c-0.4,0-0.7-0.2-0.9-0.5L7.9,9.9l-1.1,1.7C6.6,11.8,6.3,12,6,12H1c-0.6,0-1-0.4-1-1
		s0.4-1,1-1h4.5l1.7-2.6C7.4,7.2,7.7,7,8,7c0.3,0,0.7,0.2,0.8,0.5l3.2,5.7l2.1-2.8c0.2-0.3,0.5-0.4,0.8-0.4h7c0.6,0,1,0.4,1,1
		s-0.4,1-1,1h-6.5l-2.7,3.6C12.6,15.9,12.3,16,12,16z"
        />
    </SvgIcon>
);

export default InspectionsIcon;
