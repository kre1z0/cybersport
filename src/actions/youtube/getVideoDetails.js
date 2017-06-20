import { VIDEO_REQUEST } from '../../assets/const/youtube';
import {
    fetchVideoStart,
    fetchVideoSuccess,
    fetchVideoError,
} from '../../ducks/youtube';

export const getVideoDetails = id => dispatch => {
    dispatch(fetchVideoStart());
    const url = `${VIDEO_REQUEST}&id=${id}`;
    return fetch(url)
        .then(response => response.json())
        .then(response => {
            dispatch(fetchVideoSuccess(response));
        })
        .catch(error => dispatch(fetchVideoError(error)));
};
