import React from 'react';
import classnames from 'classnames';
import Avatar from 'material-ui/Avatar';

const ImgCell = ({rowIndex, columnIndex, style, key, content}) => (
    <div className={
        classnames(
            'cell',
            'img',
            {'--odd': rowIndex % 2 === 0}
        )}
         style={style}
         key={key}
    >
        <Avatar src={content} />
    </div>
);

export default ImgCell;

