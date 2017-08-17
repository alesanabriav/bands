import React, { Component } from 'react';

export default (props) => (
  <div className="jumbotron jumbotron-fluid artist" style={{background: `url(${props.artist.image_url})`}}>
  <div className="container">
    <h1 style={{color: '#fff'}}>{props.artist.name}</h1>
  </div>
</div>
)
