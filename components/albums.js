import React, { Component } from 'react';

class Albums extends Component {

  render() {
    let { items, loading } = this.props;
    const albums = items.filter((albums, ind) => ind !== 0);

    return (
      <section>
        {loading ?
          <div className="section__loading jumbotron">loading...</div>
          : ''}
        <h4 className="section__title"> {items.length > 0 ? 'Albums' : ''}</h4>
        <div className="row">
          {albums.map(album =>

            <div key={album.collectionId} className="col-lg-2">
              <a href={album.collectionViewUrl}>
              <div className="card card--album" >
                <div
                  className="card--album__bg"
                  style={{backgroundImage: `url(${album.artworkUrl100})`}}
                >
                </div>
                <div className="card-body">
                  <h6>{album.collectionName}</h6>
                </div>
              </div>
                </a>
            </div>
          )}
        </div>
      </section>
    )
  }
}

export default Albums;
