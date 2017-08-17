import React, { Component } from 'react';

class VideoModal extends Component {
  render() {
    const { video } = this.props;
    
    return (
      <div className="video-modal">
        <div className="video-modal__container">
          <video controls="true"  src={video.previewUrl}></video>
        </div>
      </div>
    )
  }
}
