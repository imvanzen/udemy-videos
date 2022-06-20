import axios from 'axios';

const KEY = 'AIzaSyCR5C2Qyv47B-W842NkUSv1svW8xeYeJY8';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: KEY
    }
});