import React from 'react';
import SvgIcon from 'material-ui/SvgIcon';

const PageBack = ({ svgStyle, svgColor, ...props }) => (
    <SvgIcon {...props} viewBox="0 0 7.4 12" style={svgStyle} color={svgColor}>
        <path d="M2.8,6l4.3-4.3c0.4-0.4,0.4-1,0-1.4s-1-0.4-1.4,0L0,6l5.7,5.7C5.9,11.9,6.2,12,6.4,12s0.5-0.1,0.7-0.3c0.4-0.4,0.4-1,0-1.4
	L2.8,6z" />
    </SvgIcon>
);

export default PageBack;
