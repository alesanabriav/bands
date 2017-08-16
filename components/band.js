import React, { Component } from 'react';
import request from 'axios';
import Artist from './artist';
import Videos from './videos';
import Search from './search';

class Band extends Component {
  constructor() {
    super();
    this.searchVideos = this.searchVideos.bind(this);
    this.searchArtist = this.searchArtist.bind(this);
    this.searchEvents = this.searchEvents.bind(this);
    this.handleQuery = this.handleQuery.bind(this);

    this.state = {
      artist: {},
      videos: [],
      events: [],
    }
  }

  searchVideos(query) {
    request
    .get(`https://itunes.apple.com/search?term=${query}&entity=musicVideo&limit=8`)
    .then(res => res.data)
    .then(res => this.setState({videos: res.results}));
  }

  searchEvents(query) {
    request
    .get(`https://rest.bandsintown.com/artists/${query}/events?app_id=developersoul`)
    .then(res => res.data)
    .then(res => console.log(res));
  }

  searchArtist(query) {
    request
    .get(`https://rest.bandsintown.com/artists/${query}/?app_id=developersoul`)
    .then(res => res.data)
    .then(res => this.setState({artist: res}));
  }

  handleQuery(query) {
    this.searchArtist(query);
    this.searchVideos(query);
    this.searchEvents(query);
  }

  render() {
    const { videos, artist } = this.state;

    return (
      <div>
        <Search onChange={this.handleQuery} />
        <Artist artist={artist}/>
        <Videos videos={videos }/>
      </div>
    )
  }
}

export default Band;
