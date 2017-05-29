import React from 'react';

const AddressCell = ({ rowIndex, content, ...props }) => (
    <div className="cell address two-rows">
        {content}
    </div>
);

export default AddressCell;
