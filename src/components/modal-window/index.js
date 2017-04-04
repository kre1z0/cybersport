import React from 'react';
import Dialog from 'material-ui/Dialog';
import IconButton from 'material-ui/IconButton';

import {CloseWindowIcon} from '../icons';
import {paleGrey} from '../../assets/theme';

import './modal-window.scss';

const closeButtonStyle = {
    position: 'absolute',
    right: -48,
    top: -12
};

const titleStyle = {
    fontSize: '1.286rem'
};

const bodyStyle = {
    borderTop: `1px solid ${paleGrey}`,
    padding: 21
};

const actionsContainerStyle = {
    padding: 20,
    borderTop: `1px solid ${paleGrey}`,
    textAlign: 'center'
};

const CloseWindowButton = (props) => (
    <IconButton {...props}
                style={closeButtonStyle}>
        <CloseWindowIcon/>
    </IconButton>
);


const ModalWindow = ({children, onRequestClose, ...props}) => (
    <Dialog onRequestClose={onRequestClose}
            modal={true}
            titleStyle={titleStyle}
            bodyStyle={bodyStyle}
            contentClassName="modal-window-content"
            autoScrollBodyContent={true}
            actionsContainerStyle={actionsContainerStyle}
            {...props}
    >
        <CloseWindowButton onTouchTap={onRequestClose}/>
        {children}
    </Dialog>
);

export default ModalWindow

