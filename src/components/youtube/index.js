import React, { Component } from 'react';
import VideoItem from '../../components/youtube/video-item';
import Navigation from '../../components/youtube/navigation';

import './videos.scss';

class Youtube extends Component {
    render() {
        const {
            width,
            getYoutubeVideosByToken,
            channel,
            videos,
            nextPageToken,
            prevPageToken,
            loadYoutubeVideo,
            selectId,
        } = this.props;
        const itemWidth = width / 4 - 5;
        const itemHeight = itemWidth / 1.69 - 4;
        return (
            <div className="youtube-videos-block">
                {channel &&
                    <Navigation
                        height={itemHeight}
                        getYoutubeVideosByToken={getYoutubeVideosByToken}
                        prevPageToken={prevPageToken}
                        nextPageToken={nextPageToken}
                        channel={channel.items[0]}
                    />}
                {videos &&
                    videos.map(
                        ({
                            id: { videoId },
                            etag,
                            snippet: {
                                title,
                                publishedAt,
                                thumbnails: { medium: { url } },
                            },
                        }) =>
                            <VideoItem
                                height={itemHeight}
                                id={videoId}
                                selectId={selectId}
                                loadYoutubeVideo={() =>
                                    loadYoutubeVideo(videoId)}
                                title={title}
                                key={etag}
                                published={publishedAt}
                                imageSrc={url}
                            />,
                    )}
            </div>
        );
    }
}

export default Youtube;
