import React, { Component } from 'react';
import { connect } from 'react-redux';

import withRouter from '../../hoc/withRouter';
import { getStreamersList } from '../../actions/twitch/getStreamersList';
import { getYoutubeChannelData } from '../../actions/youtube/getChannel';
import { getYoutubeVideosByToken } from '../../actions/youtube/getVideosByToken';
import { getAllVideosByDate } from '../../actions/youtube/getAllVideosByDate';
import { getVideoDetails } from '../../actions/youtube/getVideoDetails';
import { getYoutubeComments } from '../../actions/youtube/getComments';
import { getYoutubeCommentsByToken } from '../../actions/youtube/getCommentsBytoken';
import Youtube from '../../components/youtube';
import Twitch from '../../components/twitch';
import VideoPlayer from '../../components/video-player';
import TwitchChat from '../../components/twitch/chat';
import YoutubeListItem from '../../components/youtube/youtube-list-item';
import YoutubeSort from '../../components/youtube/youtube-date-videos';
import Comments from '../../components/youtube/comments';
import Twitter from '../../components/twitter';
import youtubeList from '../../assets/data/youtube.json';

import './home.scss';

class Home extends Component {
    state = {
        video: false,
        youtubeVideos: false,
        twitch: false,
        createdAt: '',
        width: 0,
        height: 0,
        videoIframeUrl: '',
        twitch_chat: false,
        twitch_id: null,
        youtube_list_id: null,
        youtube_video_id: null,
        twitch_screen: '',
    };
    componentDidMount() {
        this.updateDimensions();
        window.addEventListener('resize', this.updateDimensions);
        this.props.getStreamersList();
    }
    updateDimensions = () => {
        this.setState({
            width: this.iframeRef.clientWidth,
            height: this.iframeRef.clientWidth / 1.758,
        });
    };
    componentWillUnmount() {
        window.removeEventListener('resize', this.updateDimensions);
    }
    loadStream = id => {
        this.setState({
            videoIframeUrl: `https://player.twitch.tv/?channel=${id}`,
            video: true,
            twitch: true,
            twitch_chat: true,
            twitch_id: id,
            youtube_video_id: null,
        });
    };
    loadYoutubeVideos = (id, customId, name) => {
        this.setState({
            youtubeVideos: true,
            youtube_list_id: name,
        });
        this.props.getYoutubeChannelData(id, customId);
    };
    loadYoutubeVideosByDate = (list, publish) => {
        this.setState({
            youtubeVideos: true,
        });
        this.props.getAllVideosByDate(list, publish);
    };
    loadYoutubeVideo = id => {
        this.setState({
            youtube_video_id: id,
            video: true,
            twitch_id: null,
            twitch_chat: false,
            videoIframeUrl: `https://www.youtube-nocookie.com/embed/${id}?autoplay=1`,
        });
        this.props.getVideoDetails(id);
        this.props.getYoutubeComments(id);
    };
    loadTwitchScreen = (template, createdAt) => {
        const { width, height } = this.state;
        this.setState({
            video: true,
            createdAt: createdAt,
            twitch_screen: template
                .replace('{width}', Math.floor(width) - 10)
                .replace('{height}', Math.floor(height) - 10),
        });
    };
    clearTwitchScreen = () => {
        this.setState({
            twitch_screen: '',
        });
        if (this.state.twitch === false) {
            this.setState({
                video: false,
            });
        }
    };
    render() {
        const {
            twitch: { streamers },
            youtube: {
                comments,
                channel,
                videos: { items, nextPageToken, prevPageToken },
            },
            getYoutubeVideosByToken,
            getYoutubeCommentsByToken,
        } = this.props;
        const {
            video,
            width,
            height,
            twitch_chat,
            createdAt,
            twitch_screen,
            youtube_list_id,
            youtube_video_id,
            twitch_id,
            videoIframeUrl,
            youtubeVideos,
        } = this.state;
        return (
            <div className="home-container --padding">
                <div className="left-side">
                    <Twitch
                        loadTwitchScreen={this.loadTwitchScreen}
                        clearTwitchScreen={this.clearTwitchScreen}
                        selectId={twitch_id}
                        loadStream={this.loadStream}
                        streamers={streamers.filter(
                            ({ game }) => game === 'Dota 2',
                        )}
                    />
                    <Twitter url="https://twitter.com/Kreiz0/lists/dota" />
                </div>
                <div
                    className="center-side"
                    ref={ref => {
                        this.iframeRef = ref;
                    }}
                >
                    {video &&
                        <VideoPlayer
                            createdAt={createdAt}
                            imgSrc={twitch_screen}
                            height={height}
                            url={videoIframeUrl}
                        />}
                    {youtubeVideos &&
                        <Youtube
                            width={width}
                            getYoutubeVideosByToken={getYoutubeVideosByToken}
                            selectId={youtube_video_id}
                            loadYoutubeVideo={this.loadYoutubeVideo}
                            channel={channel}
                            videos={items}
                            nextPageToken={nextPageToken}
                            prevPageToken={prevPageToken}
                        />}
                </div>
                <div className="right-side">
                    {comments &&
                        <Comments
                            id={youtube_video_id}
                            getYoutubeCommentsByToken={
                                getYoutubeCommentsByToken
                            }
                            comments={comments}
                        />}
                    {twitch_chat &&
                        <TwitchChat height={height} id={twitch_id} />}
                    <YoutubeSort
                        youtubeList={youtubeList}
                        loadYoutubeVideosByDate={this.loadYoutubeVideosByDate}
                    />
                    <div className="youtube-list">
                        {youtubeList.map(({ name, title, id, custom_id }) =>
                            <YoutubeListItem
                                key={name}
                                customId={custom_id}
                                id={id}
                                selectId={youtube_list_id}
                                loadYoutube={this.loadYoutubeVideos}
                                name={name}
                                title={title}
                            />,
                        )}
                    </div>
                </div>
            </div>
        );
    }
}

const mapProps = ({ twitch, youtube }) => ({
    twitch,
    youtube,
});

const mapActions = {
    getStreamersList,
    getYoutubeChannelData,
    getYoutubeVideosByToken,
    getAllVideosByDate,
    getYoutubeComments,
    getVideoDetails,
    getYoutubeCommentsByToken,
};

export default withRouter(connect(mapProps, mapActions)(Home));
