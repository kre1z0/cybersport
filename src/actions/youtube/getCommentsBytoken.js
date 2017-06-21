import {
    COMMENTS_REQUEST,
    NUMBER_OF_COMMENTS,
} from '../../assets/const/youtube';
import {
    fetchCommentsByTokenStart,
    fetchCommentsByTokenSuccess,
    fetchCommentsByTokenError,
} from '../../ducks/youtube';

export const getYoutubeCommentsByToken = (id, token) => dispatch => {
    dispatch(fetchCommentsByTokenStart());
    const url = `${COMMENTS_REQUEST}&videoId=${id}&maxResults=${NUMBER_OF_COMMENTS}&pageToken=${token}`;
    return fetch(url)
        .then(response => response.json())
        .then(response => dispatch(fetchCommentsByTokenSuccess(response)))
        .catch(error => dispatch(fetchCommentsByTokenError(error)));
};
