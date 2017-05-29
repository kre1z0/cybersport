import React from 'react';
import cn from 'classnames';

const TextCell = ({ rowIndex, content, className, ...props }) => (
    <div className={cn('cell', className)}>
        {content}
    </div>
);

export default TextCell;
