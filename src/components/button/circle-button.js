import React from 'react';
import FloatingActionButton from 'material-ui/FloatingActionButton';

const CircleButton = ({children, wrapperStyle, ...props}) => <div style={wrapperStyle}>
    <FloatingActionButton {...props}>
        {children}
    </FloatingActionButton>
</div>;

export default CircleButton;