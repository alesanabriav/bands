import request from 'axios';
const TYPE = 'ARTIST';
const endpointItunes = 'https://itunes.apple.com';
const endpointBandsintown = 'https://rest.bandsintown.com';

export function searchArtist(query) {

  const res = (dispatch) => {
    dispatch({ type: `FETCHING_${TYPE}`});
    
    return request
    .get(`${endpointBandsintown}/artists/${query}/?app_id=developersoul`)
    .then(res => res.data)
    .then(res => dispatch({ type: `FETCH_${TYPE}`, payload: res}));
  }

  return res;
}

export function searchArtistItunes(query) {

  const res = (dispatch) => {
    return request
    .get(`${endpointItunes}/search?term=${query}&entity=musicArtist&limit=1`)
    .then(res => res.data)
    .then(res => dispatch({ type: `FETCH_${TYPE}_ID`, payload: res.results}));
  }

  return res;
}
