import React from 'react';
import prev from '../../assets/images/back.svg';
import next from '../../assets/images/next.svg';

import './navigation.scss';

const Navigation = ({
    width,
    height,
    getYoutubeVideosByToken,
    channel: { id, snippet: { thumbnails, title } },
    nextPageToken,
    prevPageToken,
}) => {
    return (
        <div
            style={{ width: width, height: height }}
            className="video-navigation"
        >
            <div className="prev">
                {prevPageToken &&
                    <div
                        className="button"
                        onTouchTap={() =>
                            getYoutubeVideosByToken(id, prevPageToken)}
                    >
                        <img src={prev} alt="prev" />
                    </div>}
            </div>
            <a
                className="channel-link"
                href={`https://www.youtube.com/channel/${id}`}
                title={title}
                target="_blank"
                rel="noopener noreferrer"
            >
                <img src={thumbnails.default.url} alt={title} />
            </a>
            <div className="title">
                {title}
            </div>
            <div className="next">
                {nextPageToken &&
                    <div
                        className="button"
                        onTouchTap={() =>
                            getYoutubeVideosByToken(id, nextPageToken)}
                    >
                        <img src={next} alt="next" />
                    </div>}
            </div>
        </div>
    );
};

export default Navigation;
