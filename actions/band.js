import request from 'axios';
const TYPE = 'BAND';
const endpointItunes = 'https://itunes.apple.com';
const endpointBandsintown = 'https://rest.bandsintown.com';

export function searchArtist(query) {

  const res = (dispatch) => {
    return request
    .get(`${endpointBandsintown}/artists/${query}/?app_id=developersoul`)
    .then(res => res.data)
    .then(res => dispatch({ type: `FETCH_${TYPE}_ARTIST`, payload: res}));
  }

  return res;

}

export function searchArtistItunes(query) {

  const res = (dispatch) => {
    return request
    .get(`${endpointItunes}/search?term=${query}&entity=musicArtist&limit=1`)
    .then(res => res.data)
    .then(res => dispatch({ type: `FETCH_${TYPE}_ARTIST_ID`, payload: res.results}));
  }

  return res;
}

export function searchVideos(query) {

  const res = (dispatch) => {
    return request
    .get(`${endpointItunes}/search?term=${query}&entity=musicVideo&limit=8`)
    .then(res => res.data)
    .then(res => dispatch({ type: `FETCH_${TYPE}_VIDEOS`, payload: res.results}));
  }

  return res;
}

export function getAlbums(id) {

  const res = (dispatch) => {
    request
    .get(`${endpointItunes}/lookup?id=${id}&entity=album`)
    .then(res => res.data)
    .then(res => dispatch({ type: `FETCH_${TYPE}_ALBUMS`, payload: res.results}));
  }

  return res;
}

export function searchEvents(query) {

  return (dispatch) => {
    return request
    .get(`${endpointBandsintown}/artists/${query}/events?app_id=developersoul`)
    .then(res => res.data)
    .then(res => dispatch({ type: `FETCH_${TYPE}_EVENTS`, payload: res}));
  }

  return res;
}
