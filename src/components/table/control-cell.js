import React from 'react';
import classnames from 'classnames';
import ControlPopup from './control-popup';

const ControlCell = ({rowIndex, columnIndex, style, content}) => (
    <div className={
        classnames(
            'cell',
            'control',
            {'--odd': rowIndex % 2 === 0}
        )}
         style={style}
    >
        <ControlPopup />
    </div>
);

export default ControlCell;

