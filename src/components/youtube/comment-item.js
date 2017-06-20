import React from 'react';

const CommentItem = ({ content: { authorDisplayName, textDisplay } }) => {
    return (
        <div>
            <div style={{ color: 'red' }}>
                {authorDisplayName}
            </div>
            <div>
                {textDisplay}
            </div>
        </div>
    );
};

export default CommentItem;
