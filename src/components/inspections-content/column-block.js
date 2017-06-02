import React from 'react';
import DateBlock from '../../components/inspections-content/tasks-date-block';

const ColumnBlock = () => (
    <div className="inspections-status-block-item">
        <div className="inspections-status-wrapper">
            <DateBlock date="01.04.2017" />
            <DateBlock date="01.04.2019" />
        </div>
    </div>
);

export default ColumnBlock;
