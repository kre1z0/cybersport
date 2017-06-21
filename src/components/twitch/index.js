import React, { Component } from 'react';
import Streamer from '../../components/twitch/streamer-item';
import StreamersList from '../../assets/data/twitch.json';

import './twitch.scss';

class Twitch extends Component {
    render() {
        const {
            streamers,
            loader,
            loadStream,
            selectId,
            loadTwitchScreen,
            clearTwitchScreen,
        } = this.props;
        return (
            <div className="streamers">
                {loader}
                {streamers &&
                    streamers.map(
                        ({
                            created_at,
                            preview: { template },
                            viewers,
                            channel: { name, status },
                        }) =>
                            <Streamer
                                preview={template}
                                loadTwitchScreen={() =>
                                    loadTwitchScreen(template, created_at)}
                                clearTwitchScreen={clearTwitchScreen}
                                selectId={selectId}
                                loadStream={loadStream}
                                viewers={viewers}
                                status={status}
                                key={name}
                                name={name}
                                streamers={StreamersList.find(
                                    ({ id }) => id === name,
                                )}
                            />,
                    )}
            </div>
        );
    }
}

export default Twitch;
