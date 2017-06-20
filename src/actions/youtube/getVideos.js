import { SEARCH_REQUEST, NUMBER_OF_VIDEOS } from '../../assets/const/youtube';
import {
    fetchVideosStart,
    fetchVideosSuccess,
    fetchVideosError,
} from '../../ducks/youtube';

export const getYoutubeChannelVideos = id => dispatch => {
    dispatch(fetchVideosStart());
    const url = `${SEARCH_REQUEST}maxResults=${NUMBER_OF_VIDEOS}&channelId=${id}&order=date`;
    return fetch(url)
        .then(response => response.json())
        .then(response => {
            dispatch(fetchVideosSuccess(response));
        })
        .catch(error => dispatch(fetchVideosError(error)));
};
