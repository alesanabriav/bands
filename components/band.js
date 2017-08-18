import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import actionsCreators from '../actions';

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
    this.actions.searchArtistItunes(query)
    .then(res => {
      this.actions.getAlbums(res.payload[0].artistId);
    });
    this.actions.searchEvents(query);
    this.actions.searchVideos(query);
  }

  render() {
    console.log(this.props);
    const { videos, artist, events, albums } = this.props;

    return (
      <div>
        <Search onChange={this.handleQuery} />
        <Artist artist={artist.item} loading={artist.loading}/>
        <Albums {...albums}/>
        <Videos {...videos}/>
        <Events {...events}/>
      </div>
    )
  }
}

export default connect(state => state)(Band);
