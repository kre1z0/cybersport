import React from 'react';
import moment from 'moment';

import './video-player.scss';

export const VideoPlayer = ({ url, height, imgSrc, createdAt }) => {
    return (
        <div>
            <div
                className="video-block"
                style={{ width: '100%', height: height }}
            >
                {imgSrc === ''
                    ? ''
                    : <div>
                          <img
                              className="twitch-screen"
                              src={imgSrc}
                              alt={url}
                          />
                          <div className="twitch-created-date">
                              {moment(createdAt).startOf('hour').fromNow()}
                          </div>
                      </div>}
                <iframe
                    title={url}
                    className="video-iframe"
                    src={url}
                    frameBorder="0"
                    allowFullScreen="allowFullScreen"
                    scrolling="no"
                />
            </div>
        </div>
    );
};

export default VideoPlayer;
