import React from 'react';
import ControlPopup from './control-popup';

const ControlCell = ({rowIndex, columnIndex, content}) => (
    <div className="cell --control">
        <ControlPopup />
    </div>
);

export default ControlCell;

