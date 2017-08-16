const TYPE = 'BAND';
const endpointItunes = 'https://itunes.apple.com';
const endpointBandsintown = 'https://rest.bandsintown.com';

searchVideos(query) {
  request
  .get(`${endpointItunes}/search?term=${query}&entity=musicVideo&limit=8`)
  .then(res => res.data)
  .then(res => this.setState({videos: res.results}));
}

searchMusic(query) {
  request
  .get(`${endpointItunes}/search?term=${query}&entity=musicVideo&limit=8`)
  .then(res => res.data)
  .then(res => this.setState({videos: res.results}));
}

searchEvents(query) {
  request
  .get(`${endpointBandsintown}/artists/${query}/events?app_id=developersoul`)
  .then(res => res.data)
  .then(res => console.log(res));
}

searchArtist(query) {
  request
  .get(`${endpointBandsintown}/artists/${query}/?app_id=developersoul`)
  .then(res => res.data)
  .then(res => this.setState({artist: res}));
}
