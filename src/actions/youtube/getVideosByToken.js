import { SEARCH_REQUEST, NUMBER_OF_VIDEOS } from '../../assets/const/youtube';
import {
    fetchTokenStart,
    fetchTokenSuccess,
    fetchTokenError,
} from '../../ducks/youtube';

export const getYoutubeVideosByToken = (id, token) => dispatch => {
    dispatch(fetchTokenStart());
    const url = `${SEARCH_REQUEST}maxResults=${NUMBER_OF_VIDEOS}&channelId=${id}&order=date&pageToken=${token}`;
    return fetch(url)
        .then(response => response.json())
        .then(response => {
            dispatch(fetchTokenSuccess(response));
        })
        .catch(error => dispatch(fetchTokenError(error)));
};
