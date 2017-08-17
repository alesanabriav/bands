import request from 'axios';
const TYPE = 'VIDEOS';
const endpointItunes = 'https://itunes.apple.com';

export function searchVideos(query) {

  const res = (dispatch) => {
    return request
    .get(`${endpointItunes}/search?term=${query}&entity=musicVideo&limit=8`)
    .then(res => res.data)
    .then(res => dispatch({ type: `FETCH_${TYPE}`, payload: res.results}));
  }

  return res;
}
