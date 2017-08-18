import React from 'react';

export default ({ loading }) => {
  if(loading) {
    return (
      <div className="section__loading jumbotron">loading...</div>
    )
  }
  return <div/>
}
