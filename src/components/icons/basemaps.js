import React from 'react';
import SvgIcon from 'material-ui/SvgIcon';
import { softGreen, darkGrey } from '../../assets/theme';

const BasemapsIcon = ({ isActive, ...props }) => (
    <SvgIcon {...props} viewBox="0 0 14 14">
        <path
            fill={isActive ? softGreen : darkGrey}
            d="M13.63.12a.78.78,0,0,0-.76,0L9.07,2,5.27.08h0a.73.73,0,0,0-.65,0h0L.43,2.16a.78.78,0,0,0-.43.7V13.22a.78.78,0,0,0,1.13.7L4.93,12l3.8,1.9h0a.73.73,0,0,0,.65,0h0l4.15-2.07a.78.78,0,0,0,.43-.7V.78A.78.78,0,0,0,13.63.12ZM5.7,2,8.3,3.33V12L5.7,10.67ZM1.56,3.33,4.15,2v8.63L1.56,12Zm10.89,7.33L9.85,12V3.33L12.44,2Z"
        />
    </SvgIcon>
);

export default BasemapsIcon;
