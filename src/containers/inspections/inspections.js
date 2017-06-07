import React, { Component } from 'react';
import { connect } from 'react-redux';
import cn from 'classnames';

import TabItem from '../../components/inspections-header/tab-item';
import Control from '../../components/inspections-header/control';
import Filters from '../../components/inspections-header/filters';
import EmployeesTasks
    from '../../components/inspections-content/employees-tasks';
import PlanMonth from '../../components/inspections-content/plan-next-month';
import PlanWindow from '../../components/plan-window';

import './inspections.scss';
import {
    calculateAudits,
    getAuditsWithEmployeesIfNeeded,
} from '../../ducks/inspections';
import withAuth from '../../hoc/withAuth';
import moment from 'moment';
import groupBy from 'lodash/groupBy';

class Inspections extends Component {
    state = {
        activeTabId: 1,
        tabs: [
            { title: 'Задачи сотрудников', id: 1 },
            { title: 'План на следующий месяц', id: 2 },
        ],
        collapsed: false,
        calcWindowOpen: false,
    };

    componentDidMount() {
        this.props.getAuditsWithEmployeesIfNeeded();
    }

    calculateAudits = (startDate, endDate) => {
        const { calculateAudits, employeesIds } = this.props;

        calculateAudits &&
            calculateAudits({
                startDate: startDate.format('YYYY-MM-DD'),
                endDate: endDate.format('YYYY-MM-DD'),
                ids: employeesIds,
            }).then(() => {
                this.closeCalcWindow();
            });
    };

    handleTabClick = id => {
        this.setState({
            activeTabId: id,
        });
    };

    handleCollapse = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    };

    closeCalcWindow = () => this.setState(state => ({ calcWindowOpen: false }));
    showCalcWindow = () => this.setState(state => ({ calcWindowOpen: true }));

    render() {
        const { tasksByStatus, tasksByDate, progress, loading } = this.props;
        const { tabs, activeTabId, collapsed, calcWindowOpen } = this.state;
        const container = cn('inspections-container', {
            height: activeTabId === 2,
        });
        return (
            <div className={container}>
                <div className="inspections-header">
                    <div className="row">
                        <div className="inspections-tabs">
                            {tabs.map(({ id, title }) => (
                                <TabItem
                                    onSwitchTab={this.handleTabClick}
                                    key={id}
                                    id={id}
                                    title={title}
                                    isActive={activeTabId === id}
                                />
                            ))}
                        </div>
                        <Control
                            activeTabId={activeTabId}
                            collapsed={collapsed}
                            handleCollapse={this.handleCollapse}
                            onCalc={this.showCalcWindow}
                        />
                    </div>
                    <Filters collapsed={collapsed} />
                </div>
                {activeTabId === 1
                    ? <EmployeesTasks tasks={tasksByStatus} loading={loading} />
                    : <PlanMonth tasks={tasksByDate} loading={loading} />}
                <PlanWindow
                    open={calcWindowOpen}
                    progress={progress}
                    onRequestClose={this.closeCalcWindow}
                    onApply={this.calculateAudits}
                />
            </div>
        );
    }
}

const joinEmployee = (audits, employees) =>
    audits.map(audit => ({
        ...audit,
        employee: employees.find(
            employee => employee.gid === audit.employee_id,
        ),
    }));
const groupAudits = audits => {
    const groupedAuditsByStatus = groupBy(audits, 'status_code');
    const statuses =
        groupedAuditsByStatus && Object.keys(groupedAuditsByStatus);

    statuses.forEach(status => {
        groupedAuditsByStatus[status] = groupBy(
            groupedAuditsByStatus[status],
            'audit_date',
        );
    });

    return groupedAuditsByStatus;
};

const mapProps = ({
    inspections: { audits, loading, employees, progress },
}) => {
    const tasksWithEmployees = joinEmployee(audits, employees);
    return {
        loading,
        tasksByStatus: groupAudits(tasksWithEmployees),
        tasksByDate: groupBy(tasksWithEmployees, 'audit_date'),
        progress,
        employeesIds: employees.map(({ gid }) => gid),
    };
};

const mapActions = { calculateAudits, getAuditsWithEmployeesIfNeeded };

export default connect(mapProps, mapActions)(withAuth(Inspections));
