import React, { Component } from 'react';
import PropType from 'prop-types';
import PlanTitleItem from '../../components/inspections-header/plan-title-item';
import ColumnBlock from '../../components/inspections-content/column-block';
import { coolGreyTwo, macaroniAndCheese, softGreen } from '../../assets/theme';

import './employes-tasks.scss';

const STATUS = [
    { title: 'Назначенные', color: coolGreyTwo, value: 0 },
    { title: 'В работе', color: macaroniAndCheese, value: 1 },
    { title: 'Выполненные', color: softGreen, value: 2 },
];

class EmployeesTasks extends Component {
    static propTypes = {
        tasks: PropType.object,
    };
    render() {
        const { tasks } = this.props;
        return (
            <div className="employes-tasks">
                <div className="employes-header">
                    {STATUS.map(({ title, color }) => (
                        <PlanTitleItem color={color} title={title} />
                    ))}
                </div>
                <div className="table-container">
                    <div className="inspections-status-block">
                        {STATUS.map(({ value }) => (
                            <ColumnBlock tasks={tasks[value]} />
                        ))}
                    </div>
                </div>
            </div>
        );
    }
}

export default EmployeesTasks;
