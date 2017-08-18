import React, { Component } from 'react';
import Minigrid from 'minigrid';
import Video from './video';

class Videos extends Component {

  componentDidMount() {
    this.grid = new Minigrid({
      container: '.items',
      item: '.item'
    });

    this.grid.mount();
  }

  render() {
    let { items, loading } = this.props;

    return (
      <section className="section">
        {loading ?
          <div className="section__loading jumbotron">loading...</div>
          : ''}
        <h4 className="section__title">{items.length > 0 ? 'Videos' : ''}</h4>
        <div className="row cards__video">

          {items.map(video =>
            <Video key={video.trackId} video={video} />
          )}
        </div>
      </section>
    )
  }
}

export default Videos;
