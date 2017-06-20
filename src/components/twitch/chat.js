import React from 'react';
import './chat.scss';

const TwitchChat = ({ id, height }) => {
    return (
        <div
            className="twitch-chat"
            style={{
                height: height,
            }}
        >
            <iframe
                title={id}
                src={`https://www.twitch.tv/${id}/chat?popout=`}
                frameBorder="0"
                scrolling="no"
            />
        </div>
    );
};

export default TwitchChat;
