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

const planButtonStyle = {
    width: 178,
    margin: 0,
    boxShadow: 'none',
    border: 'none',
};

const labelPrimaryButtonStyle = {
    padding: 0,
    textTransform: 'none',
    fontWeight: 500,
};

const PlanMonth = ({ tasks }) => {
    return (
        <div className="plan-next-month-wrapper">
            {Object.keys(tasks).length === 0
                ? <div className="tasks-empty">
                      <div className="tasks-empty-title">
                          Нет задач на согласовании
                      </div>
                      <RoundedButton
                          style={planButtonStyle}
                          labelStyle={labelPrimaryButtonStyle}
                          label="Cформировать план"
                          primary={true}
                      />
                  </div>
                : <div>
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
                  </div>}
        </div>
    );
};

export default withLoader(PlanMonth);
