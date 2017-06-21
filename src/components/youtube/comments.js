import React from 'react';
import CommentItem from '../../components/youtube/comment-item';

import './comments.scss';

const Comments = ({
    id,
    getYoutubeCommentsByToken,
    comments: { nextPageToken, items },
}) => {
    return (
        <div className="comments-navigation">
            {nextPageToken &&
                <button
                    onTouchTap={() =>
                        getYoutubeCommentsByToken(id, nextPageToken)}
                >
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
