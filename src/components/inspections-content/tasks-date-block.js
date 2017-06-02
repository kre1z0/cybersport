import React from 'react';
import WorkerItem from '../../components/inspections-content/worker-item';

const DateBlock = ({ date }) => (
    <div className="date-block">
        <div className="inspections-item-date">
            {date}
        </div>
        <WorkerItem
            id="0000001"
            fullName="Иванов Иван Иванович"
            img="https://i2.wp.com/iknowyourmeme.files.wordpress.com/2016/07/photo.png?w=388&h=388&crop=1&ssl=1"
        />
        <WorkerItem
            id="0000001"
            fullName="Иванов Иван Иванович"
            img="https://i2.wp.com/iknowyourmeme.files.wordpress.com/2016/07/photo.png?w=388&h=388&crop=1&ssl=1"
        />
        <WorkerItem
            id="0000001"
            fullName="Иванов Иван Иванович"
            img="https://i2.wp.com/iknowyourmeme.files.wordpress.com/2016/07/photo.png?w=388&h=388&crop=1&ssl=1"
        />
        <WorkerItem
            id="0000001"
            fullName="Иванов Иван Иванович"
            img="https://i2.wp.com/iknowyourmeme.files.wordpress.com/2016/07/photo.png?w=388&h=388&crop=1&ssl=1"
        />
        <WorkerItem
            id="0000001"
            fullName="Иванов Иван Иванович"
            img="https://i2.wp.com/iknowyourmeme.files.wordpress.com/2016/07/photo.png?w=388&h=388&crop=1&ssl=1"
        />
    </div>
);

export default DateBlock;
