import React, { Component } from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames';

import TabItem from '../../components/inspections-header/tab-item';
import Control from '../../components/inspections-header/control';
import Filters from '../../components/inspections-header/filters';
import Employees from '../../components/inspections-content/employees-tasks';
import PlanMonth from '../../components/inspections-content/plan-next-month';

import './inspections.scss';

class Inspections extends Component {
    state = {
        activeTabId: 1,
        tabs: [
            { title: 'Задачи сотрудников', id: 1 },
            { title: 'План на следующий месяц', id: 2 },
        ],
        collapsed: false,
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
        const container = classNames('inspections-container', {
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
                                    isActive={activeTabId === id ? true : false}
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
                {activeTabId === 1 ? <Employees /> : <PlanMonth />}
            </div>
        );
    }
}

const mapProps = () => ({});

const mapActions = {};

export default connect(mapProps, mapActions)(Inspections);
