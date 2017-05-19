import React from 'react';
import SvgIcon from 'material-ui/SvgIcon';
import { paleGrey, darkGrey } from '../../assets/theme';

const AddIcon = props => (
    <SvgIcon {...props} viewBox="0 0 46 46">
        <path
            fill={paleGrey}
            d="M23,1c12.1,0,22,9.9,22,22s-9.9,22-22,22S1,35.1,1,23S10.9,1,23,1 M23,0C10.3,0,0,10.3,0,23s10.3,23,23,23
	s23-10.3,23-23S35.7,0,23,0L23,0z"
        />
        <path
            fill={darkGrey}
            d="M29,22h-5v-5c0-0.6-0.4-1-1-1s-1,0.4-1,1v5h-5c-0.6,0-1,0.4-1,1s0.4,1,1,1h5v5c0,0.6,0.4,1,1,1s1-0.4,1-1v-5h5
	c0.6,0,1-0.4,1-1S29.6,22,29,22z"
        />
    </SvgIcon>
);

export default AddIcon;
