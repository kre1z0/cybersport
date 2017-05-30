import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Loader from 'material-ui/CircularProgress';
import HeaderTitleBlock from '../../components/header-title-block';
import Table from '../../components/table/simple-table';
import { getEmployees } from '../../ducks/employees';
import { getDomainsIfNeeded } from '../../ducks/domains';
import withAuth from '../../hoc/withAuth';

import './employees.scss';

class Employees extends Component {
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

    render() {
        const {
            employees: { data, attributes, loading },
            domains,
        } = this.props;

        const dataJS = data.toJS();
        const attrJS = attributes.toJS();
        const hashKey = Math.random().toString(36);
        const domainsJS = domains.toJS();

        return (
            <div className="employees-container --padding">
                <div className="employees-content">

                    <HeaderTitleBlock
                        title="Реестр сотрудников"
                        onNewObjectClick={this.showNewObject}
                        onSettingsClick={this.showColumnsSettings}
                        onClearFilterClick={this.clearFilter}
                    />

                    <Table
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
    getEmployees,
    getDomainsIfNeeded,
};

export default connect(mapProps, mapActions)(withAuth(Employees));
