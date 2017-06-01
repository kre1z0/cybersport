import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Loader from 'material-ui/CircularProgress';
import FlatButton from '../../components/button/flat-button';
import HeaderTitleBlock from '../../components/header-title-block';
import Table from '../../components/table/simple-table';
import {
    getEmployees,
    deleteEmployer,
    updateAttributes,
} from '../../ducks/employees';
import { getDomainsIfNeeded } from '../../ducks/domains';
import withAuth from '../../hoc/withAuth';

import NewEmployerWindow from './new-employer-window';

import ColumnsSettingsWindow
    from '../../containers/portfolio/columns-settings-window';

import GalleryWindow from '../../containers/portfolio/gallery-window';

import './employees.scss';

const EXCLUDE_ATTRIBUTES = ['control', 'employee_id', 'progress', 'gid'];

class Employees extends Component {
    state = {
        showNewEmployerWindow: false,
        showColumnSetting: false,
        query: {},
        galleryObject: null,
    };

    static propTypes = {
        employees: PropTypes.object.isRequired,
    };

    componentDidMount() {
        this.props.getEmployees({});
        this.props.getDomainsIfNeeded();
    }

    getImages = names => [names];

    clearFilter = () => {
        const { getEmployees, isAuth } = this.props;
        this.setState(() => ({
            query: {},
        }));
        isAuth && getEmployees({});
    };

    changeFilter = ({ column, filter, sort }) => {
        const { getEmployees, isAuth, employees: { attributes } } = this.props;

        let query;

        const columnDefinition = attributes
            .toJS()
            .find(({ name }) => name === column);

        if (filter || sort) {
            query = {
                ...this.state.query,
                [column]: {
                    filter,
                    sort,
                    type: columnDefinition && columnDefinition.type,
                },
            };
        } else {
            query = {
                ...this.state.query,
            };
            delete query[column];
        }

        this.setState(() => ({
            query,
        }));

        isAuth && getEmployees(query);
    };

    showWindow = status => {
        this.setState({ showNewEmployerWindow: status });
    };

    showColumnWindow = status => {
        this.setState({ showColumnSetting: status });
    };

    showGallery = object => {
        this.images = object.image_name;
        const { employees: { attributes } } = this.props;
        this.setState(state => ({
            galleryObject: Object.keys(object).map(key => ({
                value: object[key],
                key: key,
                alias: attributes.find(el => el.name === key).alias,
            })),
        }));
    };

    closeGallery = () => {
        this.setState(state => ({
            galleryObject: null,
        }));
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
            updateAttributes,
        } = this.props;

        const {
            showNewEmployerWindow,
            showColumnSetting,
            galleryObject,
        } = this.state;

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

                <ColumnsSettingsWindow
                    open={showColumnSetting}
                    onRequestClose={() => {
                        this.showColumnWindow(false);
                    }}
                    initAttributes={attributes}
                    updateAttributes={updateAttributes}
                    title="Настройки реестра"
                />
                <GalleryWindow
                    open={!!galleryObject}
                    object={galleryObject}
                    images={this.images && this.getImages(this.images)}
                    onRequestClose={this.closeGallery}
                />
                <div className="employees-content">

                    <HeaderTitleBlock
                        title="Реестр сотрудников"
                        onNewObjectClick={() => {
                            this.showWindow(true);
                        }}
                        onSettingsClick={() => {
                            this.showColumnWindow(true);
                        }}
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
    updateAttributes,
};

export default connect(mapProps, mapActions)(withAuth(Employees));
