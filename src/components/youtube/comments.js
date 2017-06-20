import React from 'react';
import CommentItem from '../../components/youtube/comment-item';

const Comments = ({ comments: { prevPageToken, nextPageToken, items } }) => {
    return (
        <div className="video-navigation">
            {prevPageToken &&
                <button>
                    -->
                </button>}
            comment-block
            {nextPageToken &&
                <button>
                    -->
                </button>}
            {items &&
                items.map(({ id, snippet: { topLevelComment: { snippet } } }) =>
                    <CommentItem key={id} content={snippet} />,
                )}
        </div>
    );
};

export default Comments;
