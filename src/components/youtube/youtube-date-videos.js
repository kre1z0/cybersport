import React from 'react';
import moment from 'moment';

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

const YoutubeSort = ({ youtubeList, loadYoutubeVideosByDate }) => {
    return (
        <div>
            {youtubeSortMenu.map(({ name, publish }) => {
                return (
                    <div
                        onTouchTap={() =>
                            loadYoutubeVideosByDate(youtubeList, publish)}
                        key={name}
                    >
                        {name}
                    </div>
                );
            })}
        </div>
    );
};

export default YoutubeSort;
