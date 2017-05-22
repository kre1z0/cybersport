import React from 'react';

const TextCell = ({rowIndex, content, ...props}) => (
    <div className="cell">
        {content}
    </div>
);

export default TextCell;
