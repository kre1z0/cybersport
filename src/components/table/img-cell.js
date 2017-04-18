import React from 'react';
import classnames from 'classnames';
import Avatar from 'material-ui/Avatar';

const ImgCell = ({rowIndex, style, content}) => (
    <div className={classnames(
        'cell',
        '--img',
        {'--odd': rowIndex % 2 === 0}
    )}
    
    >
        <Avatar src={content} />
    </div>
);

export default ImgCell;

