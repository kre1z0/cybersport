import React from 'react';
import cn from 'classnames';
import moment from 'moment'; // ➡ http://momentjs.com/

const VideoItem = ({
    id,
    published,
    imageSrc,
    title,
    loadYoutubeVideo,
    selectId,
}) => {
    return (
        <div
            className={cn('video-item', {
                selected: selectId === id,
            })}
            title={title}
            onTouchTap={loadYoutubeVideo}
        >
            <img className="video-image" src={imageSrc} alt={title} />
            <div className="published-date">
                {moment(published).startOf('hour').fromNow()}
            </div>
        </div>
    );
};

export default VideoItem;
