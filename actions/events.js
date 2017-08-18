import request from 'axios';
const TYPE = 'EVENTS';
const endpointItunes = 'https://itunes.apple.com';
const endpointBandsintown = 'https://rest.bandsintown.com';

export function searchEvents(query) {

  return (dispatch) => {
    return request
    .get(`${endpointBandsintown}/artists/${query}/events?app_id=developersoul`)
    .then(res => res.data)
    .then(res => dispatch({ type: `FETCH_${TYPE}`, payload: res}))
    .catch(err => dispatch({ type: `FAIL_${TYPE}`, payload: err}));
  }

  return res;
}
