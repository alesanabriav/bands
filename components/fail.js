import React from 'react';

export default ({ fail }) => {
  if(fail) {
    return (
      <div className="section__fail jumbotron">sorry, something goes wrong. Please search again.</div>
    )
  }
  return <div/>
}
