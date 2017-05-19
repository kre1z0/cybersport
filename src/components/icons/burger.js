import React from 'react';
import SvgIcon from 'material-ui/SvgIcon';

const BurgerIcon = props => (
    <SvgIcon {...props} viewBox="0 0 20 14">
        <path d="M19,2H1C0.4,2,0,1.6,0,1s0.4-1,1-1h18c0.6,0,1,0.4,1,1S19.6,2,19,2z" />
        <path d="M19,8H1C0.4,8,0,7.6,0,7s0.4-1,1-1h18c0.6,0,1,0.4,1,1S19.6,8,19,8z" />
        <path d="M19,14H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h18c0.6,0,1,0.4,1,1S19.6,14,19,14z" />
    </SvgIcon>
);

export default BurgerIcon;
