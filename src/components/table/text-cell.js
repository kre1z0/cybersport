import React from 'react';
import classnames from 'classnames';

const TextCell = ({rowIndex, content,  ...props}) => (
    <div className={classnames(
             'cell',
             {'--odd': rowIndex % 2 === 0}
         )}
    >
        {content}
    </div>
);

export default TextCell;
