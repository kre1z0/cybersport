import React from 'react';

import ModalWindow from '../modal-window';
import RoundedButton from '../rounded-button';

const bodyStyle = {
    padding: 0,
    overflow: 'hidden'
};

const imgStyle = {
    width: '100%',
    height: '100%'
};

const RemoveImageWindow = ({img, onRemove, ...props}) => (
    <ModalWindow {...props}
                 bodyStyle={bodyStyle}
                 actions={
                    <RoundedButton onTouchTap={onRemove}
                                   label="удалить"
                                   secondary
                    />
                 }
    >
        <img  style={imgStyle} src={img} alt=""/>
    </ModalWindow>
);

export default RemoveImageWindow;
