import React, { Component } from 'react';

class Albums extends Component {

  render() {
    let { items, loading } = this.props;
    const albums = items.filter((albums, ind) => ind !== 0);

    return (
      <section>
        <h4 className="section__title">{loading ? 'loading...' : ''} {items.length > 0 ? 'Albums' : ''}</h4>
        <div className="row">
          {albums.map(album =>
            <div key={album.collectionId} className="col-lg-2">
              <div className="card card--album" >
                <div
                  style={{backgroundImage: `url(${album.artworkUrl100})`, backgroundSize: 'cover', paddingTop: '75%', opacity: '.7'}}
                >
                </div>
                <div className="card--album__overlay"></div>
                <div className="card-body">
                  <h6>{album.collectionName}</h6>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    )
  }
}

export default Albums;
