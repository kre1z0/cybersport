import React from 'react';
import PlanTitleItem from '../../components/inspections-header/plan-title-item';
import ColumnBlock from '../../components/inspections-content/column-block';
import { coolGreyTwo, macaroniAndCheese, softGreen } from '../../assets/theme';

import './employes-tasks.scss';

const Employees = () => (
    <div className="employes-tasks">
        <div className="employes-header">
            <PlanTitleItem color={coolGreyTwo} title="Назначенные" />
            <PlanTitleItem color={macaroniAndCheese} title="В работе" />
            <PlanTitleItem color={softGreen} title="Выполненные" />
        </div>
        <div className="table-container">
            <div className="inspections-status-block">
                <ColumnBlock />
                <ColumnBlock />
                <ColumnBlock />
            </div>
        </div>

    </div>
);

export default Employees;
