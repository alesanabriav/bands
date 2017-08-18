import React, { Component } from 'react';
import Loading from './loading';
import Fail from './fail';

export default ({item, loading, fail}) => {

  return (
    <div>
      <Loading loading={loading} />
      <Fail fail={fail} />
      
      {Object.keys(item).length > 0 ?
        <div className="jumbotron jumbotron-fluid artist" style={{background: `url(${item.image_url})`}}>
          <div className="jumbotron__overlay"></div>
          <div className="container">
            <h1 style={{color: '#fff'}}>{item.name}</h1>
          </div>
        </div>
      : ''}
  </div>
  )
}
