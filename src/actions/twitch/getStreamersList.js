import StreamersList from '../../assets/data/twitch.json';
import { fetchStart, fetchSuccess, fetchError } from '../../ducks/twitch';

export const getStreamersList = () => dispatch => {
    dispatch(fetchStart());
    const allStreamers = [];
    StreamersList.map(({ id }) => allStreamers.push(id));
    const url = `https://api.twitch.tv/kraken/streams?channel=${allStreamers.join()}?callback=JSON_CALLBACK`;
    return fetch(url, {
        headers: {
            'Client-ID': 'pwv7i6ch787xuonmdgskoi2b3vrfa0t',
        },
    })
        .then(response => response.json())
        .then(({ streams }) => dispatch(fetchSuccess(streams)))
        .catch(error => dispatch(fetchError(error)));
};
