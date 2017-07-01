import React, { Component } from 'react';
import CommentItem from '../../components/youtube/comment-item';

import './comments.scss';

class Comments extends Component {
    render() {
        const {
            id,
            getYoutubeCommentsByToken,
            comments: { nextPageToken, items },
        } = this.props;
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
                    items.map(
                        ({ id, snippet: { topLevelComment: { snippet } } }) =>
                            <CommentItem key={id} content={snippet} />,
                    )}
            </div>
        );
    }
}

export default Comments;
