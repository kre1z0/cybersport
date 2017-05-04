import React from 'react';
import classnames from 'classnames';

const AddressCell = ({rowIndex, content, ...props}) => (
    <div className={classnames(
        'cell', '--address',
        {'--odd': rowIndex % 2 === 0}
    )}
    >
        {content}
    </div>
);

export default AddressCell;

