import React from 'react';
import cn from 'classnames';

import './youtube-list-item.scss';

const YoutubeList = ({ name, title, id, customId, loadYoutube, selectId }) => {
    return (
        <div
            className={cn('youtube-list-item', {
                selected: selectId === name,
            })}
            onTouchTap={() => loadYoutube(id, customId, name)}
            title={title}
        >
            {name}
        </div>
    );
};

export default YoutubeList;
