import React from 'react';
import DateBlock from '../../components/inspections-content/tasks-date-block';
import RoundedButton from '../../components/button/rounded-button';
import withLoader from '../../hoc/withLoader';

import './plan-next-month.scss';

const primaryButtonStyle = {
    width: 197,
    margin: 0,
    boxShadow: 'none',
    border: 'none',
};

const labelPrimaryButtonStyle = {
    padding: 0,
    textTransform: 'none',
    fontWeight: 500,
};

const PlanMonth = ({ tasks }) => (
    <div className="plan-next-month-wrapper">
        <div className="plan-next-month-block">
            {tasks &&
                Object.keys(tasks).map(date => (
                    <DateBlock
                        date={date}
                        tasks={tasks[date]}
                        key={date + '-key'}
                    />
                ))}
        </div>
        <div className="plan-next-month-footer">
            <RoundedButton
                style={primaryButtonStyle}
                labelStyle={labelPrimaryButtonStyle}
                label="Согласовать все задачи"
                primary={true}
            />
        </div>
    </div>
);

export default withLoader(PlanMonth);
