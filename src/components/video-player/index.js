import React from 'react';
import moment from 'moment';
import Loader from 'react-loader';

import './video-player.scss';

export const VideoPlayer = ({
    url,
    height,
    imgSrc,
    createdAt,
    loading,
    onLoadTwitchVideoImg,
}) => {
    return (
        <div className="video-block" style={{ width: '100%', height: height }}>
            {loading ? <Loader color="#707070" /> : null}
            {imgSrc === ''
                ? ''
                : <div>
                      <img
                          onLoad={onLoadTwitchVideoImg}
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
    );
};

export default VideoPlayer;
