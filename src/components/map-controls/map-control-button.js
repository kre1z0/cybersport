import React from 'react';
import IconButton from 'material-ui/IconButton';

const buttonStyle = {
    width: 44,
    height: 44,
    boxShadow: '0px 3px 10px 0 rgba(12, 13, 13, 0.1)',
    backgroundColor: '#fff',
    borderRadius: '50%',
};

const iconStyle = {
    width: 16,
    height: 16,
};

const MapControlButton = ({ icon, isActive, ...props }) => (
    <IconButton {...props} style={buttonStyle} iconStyle={iconStyle}>
        {icon}
    </IconButton>
);

export default MapControlButton;
