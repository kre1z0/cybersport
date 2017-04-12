import React from 'react';
import HeaderCell from './header-cell';
import TextCell from './text-cell';
import ImageCell from './img-cell';
import ControlCell from './control-cell';

export const TYPES = {
    HEADER: 'header',
    TEXT: 'text',
    IMG: 'img',
    CONTROL: 'control'
};

const CellSwitcher = ({type, ...props}) => {
    switch (type) {
        case TYPES.HEADER: return <HeaderCell {...props}/>;
        case TYPES.TEXT: return <TextCell {...props}/>;
        case TYPES.IMG: return <ImageCell {...props}/>;
        case TYPES.CONTROL: return <ControlCell {...props}/>;
        default: return <TextCell {...props}/>;
    }
};

export default CellSwitcher;
