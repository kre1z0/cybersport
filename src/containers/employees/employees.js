import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Loader from 'material-ui/CircularProgress';
import FlatButton from '../../components/button/flat-button';
import HeaderTitleBlock from '../../components/header-title-block';
import Table from '../../components/table/simple-table';
import { getEmployees, deleteEmployer } from '../../ducks/employees';
import { getDomainsIfNeeded } from '../../ducks/domains';
import withAuth from '../../hoc/withAuth';

import NewEmployerWindow from './new-employer-window';

import './employees.scss';

const EXCLUDE_ATTRIBUTES = ['control', 'employee_id', 'progress', 'gid'];

class Employees extends Component {
    state = {
        showNewEmployerWindow: false,
    };

    static propTypes = {
        employees: PropTypes.object.isRequired,
    };

    componentDidMount() {
        this.props.getEmployees({});
        this.props.getDomainsIfNeeded();
    }

    getImages = names => {
        const { staticServiceUrl } = this.props;

        return (
            names &&
            names
                .split(';')
                .map(
                    name =>
                        staticServiceUrl &&
                        staticServiceUrl.replace('{{filename}}', name),
                )
        );
    };

    showWindow = status => {
        this.setState({ showNewEmployerWindow: status });
    };

    removeObject = rowIndex => {
        const { employees: { data }, deleteEmployer } = this.props;
        const id = data.get(rowIndex).gid;
        if (id) {
            deleteEmployer && deleteEmployer([id]);
        }
    };

    render() {
        const {
            employees: { data, attributes, loading },
            domains,
        } = this.props;

        const { showNewEmployerWindow } = this.state;

        const dataJS = data.toJS();
        const attrJS = attributes.toJS();
        const hashKey = Math.random().toString(36);
        const domainsJS = domains.toJS();

        return (
            <div className="employees-container --padding">
                <NewEmployerWindow
                    show={showNewEmployerWindow}
                    onHide={() => {
                        this.showWindow(false);
                    }}
                    data={attrJS.filter(
                        ({ name }) => !EXCLUDE_ATTRIBUTES.includes(name),
                    )}
                />
                <div className="employees-content">

                    <HeaderTitleBlock
                        title="Реестр сотрудников"
                        onNewObjectClick={() => {
                            this.showWindow(true);
                        }}
                        onSettingsClick={this.showColumnsSettings}
                        onClearFilterClick={this.clearFilter}
                    />

                    <Table
                        rowMenu={(closePopup, removeRow) => (
                            <div className="control-popup-content">
                                <FlatButton
                                    label="Задачи сотрудника"
                                    onTouchTap={closePopup}
                                />
                                <FlatButton
                                    label="Удалить сотрудника"
                                    onTouchTap={removeRow}
                                    secondary={true}
                                />
                            </div>
                        )}
                        cacheKey={hashKey}
                        data={dataJS}
                        getImages={this.getImages}
                        columns={attrJS.filter(({ isVisible }) => isVisible)}
                        domains={domainsJS}
                        loader={
                            loading && <Loader className="loader overlay" />
                        }
                        onFilterChange={this.changeFilter}
                        onImageClick={this.showGallery}
                        onRemove={this.removeObject}
                    />
                </div>
            </div>
        );
    }
}

const mapProps = ({ employees, domains, user: { staticServiceUrl } }) => ({
    employees,
    domains,
    staticServiceUrl,
});

const mapActions = {
    deleteEmployer,
    getEmployees,
    getDomainsIfNeeded,
};

export default connect(mapProps, mapActions)(withAuth(Employees));
