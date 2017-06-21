import React from 'react';
import cn from 'classnames';
import { countries } from 'country-data';
import user from '../../assets/images/user.svg';

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
    const countryName = countries[country.toUpperCase()].name;
    return (
        <div
            className={cn('item', { selected: selectId === name })}
            title={status}
            onTouchTap={() => loadStream(name)}
            onMouseEnter={loadTwitchScreen}
            onMouseLeave={clearTwitchScreen}
        >
            <span
                className={`flag-icon flag-icon-${country.toLowerCase()}`}
                title={countryName}
            />
            <span className="nickname">{nickname}</span>
            <span className="viewers">{viewers}</span>
            <img src={user} alt="user" />
        </div>
    );
};

export default Streamer;
