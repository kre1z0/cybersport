import React from 'react';
import ControlPopup from './control-popup';

const ControlCell = ({ rowIndex, columnIndex, content, onRemove }) => (
    <div className="cell control">
        <ControlPopup onRemove={onRemove} rowIndex={rowIndex} />
    </div>
);

export default ControlCell;
