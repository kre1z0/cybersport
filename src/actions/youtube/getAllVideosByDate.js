import {
    SEARCH_REQUEST,
    CHANNEL_REQUEST,
    API_KEY,
    NUMBER_OF_VIDEOS,
} from '../../assets/const/youtube';
import { fetchAllVideos } from '../../ducks/youtube';
import moment from 'moment';

const getId = (url, custom_id, id) => {
    return fetch(url).then(response => response.json()).then(channelInfo => {
        if (channelInfo.items.length === 0) {
            return [];
        } else {
            return getVideos(channelInfo.items[0].id);
        }
    });
};

const getVideos = id => {
    const url = `${SEARCH_REQUEST}maxResults=${NUMBER_OF_VIDEOS}&channelId=${id}&order=date`;
    return fetch(url)
        .then(response => response.json())
        .then(response => response.items);
};

export const getAllVideosByDate = (youtubeList, publishDate) => dispatch => {
    const getAllId = youtubeList.map(({ custom_id, id }) => {
        const url = id === undefined
            ? `${CHANNEL_REQUEST}forUsername=${custom_id}&maxResults=15&key=${API_KEY}`
            : `${CHANNEL_REQUEST}id=${id}&maxResults=15&key=${API_KEY}`;
        return getId(url, custom_id, id);
    });
    return Promise.all(getAllId).then(array => {
        const flattened = array.reduce((a, b) => a.concat(b));
        const filterArrayByDate = flattened.filter(
            ({ snippet: { publishedAt } }) =>
                moment(publishedAt).isSame(publishDate, 'd'),
        );
        filterArrayByDate.sort((a, b) => {
            if (a.snippet.publishedAt > b.snippet.publishedAt) return -1;
            else if (a.snippet.publishedAt < b.snippet.publishedAt) return 1;
            return 0;
        });
        const obj = {};
        obj.items = filterArrayByDate;
        dispatch(fetchAllVideos(obj));
    });
};
