import { CHANNEL_REQUEST, API_KEY } from '../../assets/const/youtube';
import {
    fetchChannelStart,
    fetchChannelSuccess,
    fetchChannelError,
} from '../../ducks/youtube';
import { getYoutubeChannelVideos } from '../../actions/youtube/getVideos';

export const getYoutubeChannelData = (id, customId) => dispatch => {
    dispatch(fetchChannelStart());
    const url = id === undefined
        ? `${CHANNEL_REQUEST}forUsername=${customId}&maxResults=15&key=${API_KEY}`
        : `${CHANNEL_REQUEST}id=${id}&maxResults=15&key=${API_KEY}`;
    return fetch(url)
        .then(response => response.json())
        .then(channelInfo => {
            if (channelInfo.items.length === 0) {
                dispatch(fetchChannelError('id is empty'));
            } else {
                dispatch(fetchChannelSuccess(channelInfo));
                dispatch(getYoutubeChannelVideos(channelInfo.items[0].id));
            }
        })
        .catch(error => dispatch(fetchChannelError(error)));
};
