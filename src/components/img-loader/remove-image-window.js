import React from 'react';

import ModalWindow from '../modal-window';
import RoundedButton from '../button/rounded-button';

const bodyStyle = {
    padding: 0,
    overflow: 'hidden'
};

const imgStyle = {
    width: '100%',
    height: '100%'
};

const RemoveImageWindow = ({src, name, onRemove, ...props}) => (
    <ModalWindow {...props}
                 bodyStyle={bodyStyle}
                 actions={
                    <RoundedButton onTouchTap={() => onRemove(name)}
                                   label="удалить"
                                   secondary
                    />
                 }
    >
        <img style={imgStyle} src={src} alt=""/>
    </ModalWindow>
);

export default RemoveImageWindow;
