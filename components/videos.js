import React, { Component } from 'react';
import Minigrid from 'minigrid';
import Video from './video';
import Loading from './loading';
import Fail from './fail';

class Videos extends Component {

  componentDidMount() {
    this.grid = new Minigrid({
      container: '.items',
      item: '.item'
    });

    this.grid.mount();
  }

  render() {
    let { items, loading, fail } = this.props;

    return (
      <section className="section">
        <Loading loading={loading} />
        <Fail fail={fail} />

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
