import React from 'react';
import moment from 'moment'; // ➡ http://momentjs.com/

const CommentItem = ({
    content: {
        authorDisplayName,
        textDisplay,
        publishedAt,
        authorChannelUrl,
        authorProfileImageUrl,
    },
}) => {
    return (
        <div className="item">
            <div className="header">
                <img
                    className="avatar"
                    src={authorProfileImageUrl}
                    alt="avatar"
                />
                <div>
                    <a
                        className="name"
                        rel="noopener noreferrer"
                        href={authorChannelUrl}
                        target="_blank"
                    >
                        {authorDisplayName}
                    </a>
                    <div className="publish-date">
                        {moment(publishedAt).startOf('hour').fromNow()}
                    </div>
                </div>
            </div>
            <div className="text-content">
                {textDisplay}
            </div>
        </div>
    );
};

export default CommentItem;
