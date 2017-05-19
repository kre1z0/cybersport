import React from 'react';
import SvgIcon from 'material-ui/SvgIcon';

const CloseMapPopupIcon = ({ svgStyle, svgColor, ...props }) => (
    <SvgIcon {...props} viewBox="0 0 12 12" style={svgStyle} color={svgColor}>
        <path d="M7.4,6l4.3-4.3c0.4-0.4,0.4-1,0-1.4s-1-0.4-1.4,0L6,4.6L1.7,0.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4L4.6,6l-4.3,4.3
		c-0.4,0.4-0.4,1,0,1.4C0.5,11.9,0.7,12,1,12s0.5-0.1,0.7-0.3L6,7.4l4.3,4.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3
		c0.4-0.4,0.4-1,0-1.4L7.4,6z" />
    </SvgIcon>
);

export default CloseMapPopupIcon;
