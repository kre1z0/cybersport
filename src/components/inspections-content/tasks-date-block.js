import React from 'react';
import WorkerItem from '../../components/inspections-content/worker-item';
import moment from 'moment';

const DateBlock = ({ date, tasks = [] }) => (
    <div className="date-block">
        <div className="inspections-item-date">
            {moment(date).format('L')}
        </div>
        {tasks.map(({ gid, employee, image }) => (
            <WorkerItem
                id={gid}
                fullName={employee.full_name}
                img={employee.image}
                key={gid}
            />
        ))}
    </div>
);

export default DateBlock;
