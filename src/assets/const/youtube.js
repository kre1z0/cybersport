export const API_KEY = 'AIzaSyB857qDfoTXwdCBaIFDqxEUD3j2W_hCMVg';
export const CHANNEL_REQUEST = `https://www.googleapis.com/youtube/v3/channels?part=snippet&key=${API_KEY}&`;
export const SEARCH_REQUEST = `https://www.googleapis.com/youtube/v3/search?part=snippet&key=${API_KEY}&`;
export const VIDEO_REQUEST = `https://www.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&key=${API_KEY}&`;
export const COMMENTS_REQUEST = `https://www.googleapis.com/youtube/v3/commentThreads?key=${API_KEY}&textFormat=plainText&part=snippet`;
export const NUMBER_OF_VIDEOS = 15;
export const NUMBER_OF_COMMENTS = 15;
