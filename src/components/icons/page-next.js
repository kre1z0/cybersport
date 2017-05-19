import React from 'react';
import SvgIcon from 'material-ui/SvgIcon';

const PageNext = ({ svgStyle, svgColor, ...props }) => (
    <SvgIcon {...props} viewBox="0 0 7.4 12" style={svgStyle} color={svgColor}>
        <path d="M4.6,6l-4.3,4.3c-0.4,0.4-0.4,1,0,1.4s1,0.4,1.4,0L7.4,6L1.7,0.3C1.5,0.1,1.3,0,1,0S0.5,0.1,0.3,0.3c-0.4,0.4-0.4,1,0,1.4
	L4.6,6z" />
    </SvgIcon>
);

export default PageNext;
