import React, { Component } from 'react';

export default (props) => {
  return (
    <div>
      {Object.keys(props.artist).length > 0 ?
        <div className="jumbotron jumbotron-fluid artist" style={{background: `url(${props.artist.image_url})`}}>
          <div className="jumbotron__overlay"></div>
          <div className="container">
            <h1 style={{color: '#fff'}}>{props.artist.name}</h1>
          </div>
        </div>
      : ''}
  </div>
  )
}
