import React from 'react';
import classnames from 'classnames';

const TextCell = ({rowIndex, columnIndex, style, key, content}) => (
    <div className={
        classnames(
            'cell', {'--odd': rowIndex % 2 === 0}
        )}
         style={style}
         key={key}
    >
        {content}
    </div>
);

export default TextCell;
