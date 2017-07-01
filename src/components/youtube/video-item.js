import React, { Component } from 'react';
import cn from 'classnames';
import Loader from 'react-loader';
import moment from 'moment'; // ➡ http://momentjs.com/

class VideoItem extends Component {
    state = {
        loading: true,
    };
    onLoadYoutubeVideoImg = () => {
        this.setState({
            loading: false,
        });
    };
    render() {
        const {
            width,
            height,
            id,
            published,
            imageSrc,
            title,
            loadYoutubeVideo,
            selectId,
        } = this.props;
        const { loading } = this.state;
        const selected = cn('video-item', {
            selected: selectId === id,
        });
        return (
            <div
                style={{ width: width, height: height }}
                className={selected}
                onTouchTap={loadYoutubeVideo}
            >
                {loading ? <Loader color="#707070" /> : null}
                <div className="video-item-title">
                    {title}
                </div>
                <img
                    onLoad={this.onLoadYoutubeVideoImg}
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
    }
}

export default VideoItem;
