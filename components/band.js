import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionsCreators from '../actions/band';

import Artist from './artist';
import Albums from './albums';
import Videos from './videos';
import Events from './events';
import Search from './search';

class Band extends Component {
  constructor(props) {
    super(props);
    this.handleQuery = this.handleQuery.bind(this);
  }

  componentDidMount() {
    let { dispatch } = this.props;
    this.actions = bindActionCreators(actionsCreators, dispatch);
  }

  handleQuery(query) {
    this.actions.searchArtist(query);
    this.actions.searchEvents(query);
    this.actions.searchVideos(query);
    this.actions.searchArtistItunes(query)
    .then(res => {
      this.actions.getAlbums(res.payload[0].artistId);
    });
  }

  render() {
    const { videos, artist, events, albums } = this.props.band;

    return (
      <div>
        <Search onChange={this.handleQuery} />
        <Artist artist={artist}/>
        <Albums albums={albums}/>
        <Videos videos={videos}/>
        <Events events={events}/>
      </div>
    )
  }
}

export default connect(state => state)(Band);
