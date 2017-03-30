import React from 'react';
import Dialog from 'material-ui/Dialog';
import IconButton from 'material-ui/IconButton';

import {CloseWindowIcon} from '../icons';

const closeButtonStyle = {
    position: 'absolute',
    right: -48,
    top: -12
};

const CloseWindowButton = (props) => (
    <IconButton {...props} style={closeButtonStyle}>
        <CloseWindowIcon/>
    </IconButton>
);


const ModalWindow = ({children, onRequestClose, ...props}) => (
    <Dialog {...props} onRequestClose={onRequestClose} modal={true}>
        <CloseWindowButton onTouchTap={onRequestClose}/>
        {children}
    </Dialog>
);

export default ModalWindow

