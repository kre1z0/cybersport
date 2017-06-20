import React from 'react';

const Navigation = ({
    getYoutubeVideosByToken,
    channel: { id, snippet: { thumbnails, title } },
    nextPageToken,
    prevPageToken,
}) => {
    return (
        <div className="video-navigation">
            {prevPageToken &&
                <button
                    onTouchTap={() =>
                        getYoutubeVideosByToken(id, prevPageToken)}
                >
                    -->
                </button>}
            <a
                href={`https://www.youtube.com/channel/${id}`}
                title={title}
                target="_blank"
                rel="noopener noreferrer"
            >
                <img src={thumbnails.default.url} alt={title} />
            </a>
            {nextPageToken &&
                <button
                    onTouchTap={() =>
                        getYoutubeVideosByToken(id, nextPageToken)}
                >
                    -->
                </button>}
        </div>
    );
};

export default Navigation;
