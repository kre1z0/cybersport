import React from 'react';
import ControlPopup from './control-popup';

const ControlCell = ({
    rowIndex,
    columnIndex,
    content,
    onRemove,
    ...props
}) => (
    <div className="cell control">
        <ControlPopup onRemove={onRemove} rowIndex={rowIndex} {...props} />
    </div>
);

export default ControlCell;
