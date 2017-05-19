import React from 'react';
import Avatar from 'material-ui/Avatar';

const ImgCell = ({ rowIndex, style, content }) => (
    <div className="cell --img">
        <Avatar src={content} />
    </div>
);

export default ImgCell;
