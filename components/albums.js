import React, { Component } from 'react';

class Albums extends Component {

  render() {
    let { albums } = this.props;
    albums = albums.filter((albums, ind) => ind !== 0);

    return (
      <section>
        <h4 className="section__title">Albums</h4>
        <div className="row">
          {albums.map(album =>
            <div className="col-lg-2">
              <div className="card card--album" >
                <div
                  className="card-img-top"
                  style={{backgroundImage: `url(${album.artworkUrl100})`, backgroundSize: 'cover', paddingTop: '75%'}}
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
