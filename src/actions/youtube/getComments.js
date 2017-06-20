import {
    COMMENTS_REQUEST,
    NUMBER_OF_COMMENTS,
} from '../../assets/const/youtube';
import {
    fetchCommentsStart,
    fetchCommentsSuccess,
    fetchCommentsError,
} from '../../ducks/youtube';

export const getYoutubeComments = id => dispatch => {
    dispatch(fetchCommentsStart());
    const url = `${COMMENTS_REQUEST}&maxResults=${NUMBER_OF_COMMENTS}&videoId=${id}`;
    return fetch(url)
        .then(response => response.json())
        .then(response => {
            dispatch(fetchCommentsSuccess(response));
        })
        .catch(error => dispatch(fetchCommentsError(error)));
};
