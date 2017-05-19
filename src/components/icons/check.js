import React from 'react';
import SvgIcon from 'material-ui/SvgIcon';
import { softGreen } from '../../assets/theme';

const Check = props => (
    <SvgIcon {...props} viewBox="0 0 10 12">
        <path
            fill={softGreen}
            d="M4.3,9.9c-0.3,0-0.5-0.1-0.7-0.3L0.3,6.3c-0.4-0.4-0.4-1,0-1.4c0.4-0.4,1-0.4,1.4,0l2.6,2.6l6-7c0.4-0.4,1-0.5,1.4-0.1  c0.4,0.4,0.5,1,0.1,1.4L5.1,9.5C4.9,9.8,4.6,9.9,4.3,9.9C4.4,9.9,4.3,9.9,4.3,9.9z"
        />
    </SvgIcon>
);

export default Check;
