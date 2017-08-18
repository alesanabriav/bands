import request from 'axios';

const TYPE = 'ALBUMS';
const endpointItunes = 'https://itunes.apple.com';

export function getAlbums(id) {

  const res = (dispatch) => {
    dispatch({ type: `FETCHING_${TYPE}`});

    request
    .get(`${endpointItunes}/lookup?id=${id}&entity=album`)
    .then(res => res.data)
    .then(res => dispatch({ type: `FETCH_${TYPE}`, payload: res.results}))
    .catch(err => dispatch({ type: `FAIL_${TYPE}`, payload: err}));
  }

  return res;
}
