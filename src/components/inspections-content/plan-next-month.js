import React from 'react';
import DateBlock from '../../components/inspections-content/tasks-date-block';
import RoundedButton from '../../components/button/rounded-button';

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

const PlanMonth = () => (
    <div className="plan-next-month-wrapper">
        <div className="plan-next-month-block">
            <DateBlock date="01.04.2017" />
            <DateBlock date="01.04.2017" />
            <DateBlock date="01.04.2017" />
            <DateBlock date="01.04.2017" />
            <DateBlock date="01.04.2018" />
            <DateBlock date="01.04.2019" />
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

export default PlanMonth;
