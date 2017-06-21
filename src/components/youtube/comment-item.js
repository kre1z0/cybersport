import React from 'react';
import moment from 'moment'; // ➡ http://momentjs.com/

const CommentItem = ({
    content: { authorDisplayName, textDisplay, publishedAt },
}) => {
    return (
        <div className="item">
            <div className="name">
                {authorDisplayName}
            </div>
            <div className="publish-date">
                {moment(publishedAt).startOf('hour').fromNow()}
            </div>
            <div className="text-content">
                {textDisplay}
            </div>
        </div>
    );
};

export default CommentItem;
