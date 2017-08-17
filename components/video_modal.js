import React, { Component } from 'react';

class VideoModal extends Component {
  render() {
    const { video, show } = this.props;

    return (
      <div className={show ? "video-modal video-modal--show" : "video-modal"}>
        <div className="video-modal__container">
          <a href="#" onClick={this.toggleModal}><i className="ion-close"></i></a>
          <video controls="true"  src={video.previewUrl}></video>
        </div>
      </div>
    )
  }
}

export default VideoModal;
