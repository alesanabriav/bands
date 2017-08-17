import React, { Component } from 'react';

class VideoModal extends Component {

  constructor(props) {
    super(props);

    this.state = {
      show: false
    }
  }

  toggleModal () {
    this.setState({show: !this.state.show});
  }

  render() {
    const { video } = this.props;
    const { show } = this.state;

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
