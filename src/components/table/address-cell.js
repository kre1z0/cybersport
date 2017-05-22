import React from 'react';

const AddressCell = ({rowIndex, content, ...props}) => (
    <div className="cell --address">
        {content}
    </div>
);

export default AddressCell;

