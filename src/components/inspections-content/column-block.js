import React from 'react';
import DateBlock from '../../components/inspections-content/tasks-date-block';

const ColumnBlock = ({ tasks = {} }) => (
    <div className="inspections-status-block-item">
        <div className="inspections-status-wrapper">
            {tasks &&
                Object.keys(tasks).map(date => (
                    <DateBlock date={date} tasks={tasks[date]} />
                ))}
        </div>
    </div>
);

export default ColumnBlock;
