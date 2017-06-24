import React from 'react';
import cn from 'classnames';
import moment from 'moment'; // ➡ http://momentjs.com/

const VideoItem = ({
    width,
    height,
    id,
    published,
    imageSrc,
    title,
    loadYoutubeVideo,
    selectId,
}) => {
    return (
        <div
            style={{ width: width, height: height }}
            className={cn('video-item', {
                selected: selectId === id,
            })}
            title={title}
            onTouchTap={loadYoutubeVideo}
        >
            <img
                style={{ maxHeight: height + 10 }}
                className="video-image"
                src={imageSrc}
                alt={title}
            />
            <div className="published-date">
                {moment(published).startOf('hour').fromNow()}
            </div>
        </div>
    );
};

export default VideoItem;
