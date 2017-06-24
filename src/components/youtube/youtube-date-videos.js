import React from 'react';
import moment from 'moment';
import cn from 'classnames';

import './sort.scss';

const today = moment().clone().startOf('day');
const yesterday = moment().clone().subtract(1, 'days').startOf('day');
const beforeYesterday = moment().clone().subtract(2, 'days').startOf('day');

const youtubeSortMenu = [
    {
        name: 'сегодня',
        publish: today,
    },
    {
        name: 'вчера',
        publish: yesterday,
    },
    {
        name: 'позавчера',
        publish: beforeYesterday,
    },
];

const YoutubeSort = ({ youtubeList, loadYoutubeVideosByDate, selectId }) => {
    return (
        <ul className="youtube-sort-panel">
            {youtubeSortMenu.map(({ name, publish }) => {
                return (
                    <li
                        className={cn('youtube-sort-item', {
                            selected: selectId === name,
                        })}
                        onTouchTap={() =>
                            loadYoutubeVideosByDate(youtubeList, publish, name)}
                        key={name}
                    >
                        {name}
                    </li>
                );
            })}
        </ul>
    );
};

export default YoutubeSort;
