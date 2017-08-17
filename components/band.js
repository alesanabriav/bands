import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionsCreators from '../actions/band';

import Artist from './artist';
import Videos from './videos';
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
  }

  render() {
    const { videos, artist } = this.props.band;

    return (
      <div>
        <Search onChange={this.handleQuery} />
        <Artist artist={artist}/>
        <Videos videos={videos }/>
      </div>
    )
  }
}

export default connect(state => state)(Band);
