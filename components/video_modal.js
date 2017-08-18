import React, { Component } from 'react';

class VideoModal extends Component {
  constructor(props) {
    super(props);
    this.handleClose = this.handleClose.bind(this);
    this.playVideo = this.playVideo.bind(this);
  }

  handleClose() {
    this.props.onClose();
  }

  playVideo() {
    this.video.volume = 0.1;
    this.video.play();
  }

  render() {
    const { video, show } = this.props;
    if(this.video && show) {
      this.playVideo();
    }

    return (
      <div className={show ? "video-modal video-modal--show" : "video-modal"}>
        <div className="video-modal__container">
          <a href="#" onClick={this.toggleModal}><i className="ion-close"></i></a>
          <video ref={video => this.video = video} controls="true" src={video.previewUrl}></video>
        </div>

        <div className="video-modal__overlay" onClick={this.handleClose}></div>
      </div>
    )
  }
}

export default VideoModal;
