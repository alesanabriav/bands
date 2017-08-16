import React, { Component } from 'react';

export default (props) => (
  <section className="section">
    <h4 className="section__title">Videos</h4>
    <div className="row">
      {props.videos.map(video =>
        <div className="col-lg-3">
          <div className="card card--video">
            <img src={video.artworkUrl100} className="img-fluid" alt=""/>
            <svg width="50px" height="50px" viewBox="0 0 50 50" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">

                <defs>
                    <linearGradient x1="89.4140625%" y1="0%" x2="0%" y2="100%" id="linearGradient-1">
                        <stop stopColor="#FF3CAC" offset="0%"></stop>
                        <stop stopColor="#F76B1C" offset="100%"></stop>
                    </linearGradient>
                </defs>
                <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fill-rule="evenodd">
                    <g id="play">
                        <rect id="Rectangle" fill="url(#linearGradient-1)" x="0" y="0" width="50" height="50" rx="8"></rect>
                        <polygon id="Triangle" fillOpacity="0.8" fill="#FFFFFF" transform="translate(26.000000, 25.000000) rotate(90.000000) translate(-26.000000, -25.000000) " points="26 12 39 38 13 38"></polygon>
                    </g>
                </g>
            </svg>
            {/* <video controls="true"  src={video.previewUrl}></video> */}
            <div className="card-body">
              {video.trackName}
            </div>
          </div>
        </div>
      )}
    </div>
  </section>
)
