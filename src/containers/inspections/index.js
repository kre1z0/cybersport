import React, { Component } from 'react';
import { connect } from 'react-redux';
import cn from 'classnames';

import TabItem from '../../components/inspections-header/tab-item';
import Control from '../../components/inspections-header/control';
import Filters from '../../components/inspections-header/filters';
import EmployeesTasks
    from '../../components/inspections-content/employees-tasks';
import PlanMonth from '../../components/inspections-content/plan-next-month';

import './inspections.scss';
import { calculateAudits } from '../../ducks/inspections';
import withAuth from '../../hoc/withAuth';
import moment from 'moment';

class Inspections extends Component {
    state = {
        activeTabId: 1,
        tabs: [
            { title: 'Задачи сотрудников', id: 1 },
            { title: 'План на следующий месяц', id: 2 },
        ],
        collapsed: false,
    };

    calculateAudits = () => {
        const now = moment();
        const startDate = now.format('YYYY-MM-DD');
        const end = now.add(30, 'days');
        const endDate = end.format('YYYY-MM-DD');

        this.props.calculateAudits({
            startDate,
            endDate,
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

    render() {
        const { tabs, activeTabId, collapsed } = this.state;
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
                        />
                    </div>
                    <Filters collapsed={collapsed} />
                </div>
                {activeTabId === 1 ? <EmployeesTasks /> : <PlanMonth />}
            </div>
        );
    }
}

const mapProps = ({ inspections: { audits, loading, employees } }) => ({
    audits,
    loading,
    employees,
});

const mapActions = { calculateAudits };

export default connect(mapProps, mapActions)(withAuth(Inspections));
