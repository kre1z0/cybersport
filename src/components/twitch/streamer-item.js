import React from 'react';
import Ukraine from '../../assets/images/flag_country/Ukraine.png';
import cn from 'classnames';

const Streamer = ({
    loadStream,
    viewers,
    name,
    selectId,
    status,
    loadTwitchScreen,
    clearTwitchScreen,
    streamers: { nickname, country },
}) => {
    return (
        <li
            title={status}
            className={cn({ selected: selectId === name })}
            onTouchTap={() => loadStream(name)}
            onMouseEnter={loadTwitchScreen}
            onMouseLeave={clearTwitchScreen}
        >
            <img src={Ukraine} title={country} alt={country} />
            <span className="nickname">{nickname}</span>
            <span className="viewers">{viewers}</span>
        </li>
    );
};

export default Streamer;
