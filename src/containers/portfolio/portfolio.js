import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Loader from 'material-ui/CircularProgress';
import HeaderTitleBlock from '../../components/header-title-block';
import FlatButton from '../../components/button/flat-button';
import Table from '../../components/table/simple-table';
import {
    getObjects,
    deleteObject,
    updateAttributes,
} from '../../ducks/objects';
import { getDomainsIfNeeded } from '../../ducks/domains';
import withAuth from '../../hoc/withAuth';

import NewObjectWindow from './new-object-window';
import ColumnsSettingsWindow from './columns-settings-window';
import GalleryWindow from './gallery-window';

import './portfolio.scss';

class Portfolio extends Component {
    static propTypes = {
        objects: PropTypes.object.isRequired,
    };

    state = {
        newObjectOpen: false,
        columnsSettingsOpen: false,
        galleryObject: null,
        query: {},
    };

    componentDidMount() {
        this.props.getObjects({});
        this.props.getDomainsIfNeeded();
    }

    showNewObject = e => {
        e.preventDefault();
        this.setState(() => ({ newObjectOpen: true }));
    };
    closeNewObject = () => this.setState(() => ({ newObjectOpen: false }));
    showColumnsSettings = e => {
        e.preventDefault();
        this.setState(() => ({ columnsSettingsOpen: true }));
    };
    closeColumnsSettings = () =>
        this.setState(() => ({ columnsSettingsOpen: false }));

    addNewObject = () => {
        this.closeNewObject();
    };

    clearFilter = () => {
        const { getObjects, isAuth } = this.props;
        this.setState(() => ({
            query: {},
        }));
        isAuth && getObjects({});
    };

    changeFilter = ({ column, filter, sort }) => {
        const { getObjects, isAuth, objects: { attributes } } = this.props;

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

        isAuth && getObjects(query);
    };

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

    showGallery = object => {
        this.images = object.image_name;
        const { objects: { attributes } } = this.props;
        this.setState(state => ({
            galleryObject: Object.keys(object)
                .filter(key => attributes.find(el => el.name === key))
                .map(key => ({
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
        const { deleteObject, objects: { data } } = this.props;
        const id = data.get(rowIndex).gid;
        if (id) {
            deleteObject && deleteObject([id]);
        }
    };

    render() {
        const {
            objects: { data, attributes, loading },
            domains,
            updateAttributes,
        } = this.props;
        const {
            newObjectOpen,
            columnsSettingsOpen,
            galleryObject,
            query,
        } = this.state;

        const dataJS = data.toJS();
        const attrJS = attributes.toJS();
        const hashKey = Math.random().toString(36);
        const domainsJS = domains.toJS();

        return (
            <div className="portfolio-container --padding">
                <div className="portfolio-content">

                    <HeaderTitleBlock
                        title="Реестр объектов залога"
                        onNewObjectClick={this.showNewObject}
                        onSettingsClick={this.showColumnsSettings}
                        onClearFilterClick={this.clearFilter}
                    />

                    <Table
                        rowMenu={(closePopup, removeRow) => (
                            <div className="control-popup-content">
                                <FlatButton
                                    label="Карточка мониторинга"
                                    onTouchTap={closePopup}
                                />
                                <FlatButton
                                    label="Ближайшая проверка"
                                    onTouchTap={closePopup}
                                />
                                <FlatButton
                                    label="Удалить объект"
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
                        query={query}
                        loader={
                            loading && <Loader className="loader overlay" />
                        }
                        onFilterChange={this.changeFilter}
                        onImageClick={this.showGallery}
                        onRemove={this.removeObject}
                    />
                    <NewObjectWindow
                        open={newObjectOpen}
                        onRequestClose={this.closeNewObject}
                    />
                    <ColumnsSettingsWindow
                        open={columnsSettingsOpen}
                        onRequestClose={this.closeColumnsSettings}
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
                </div>
            </div>
        );
    }
}

const mapProps = ({ domains, objects, user: { staticServiceUrl } }) => ({
    objects,
    staticServiceUrl,
    domains,
});

const mapActions = {
    getObjects,
    getDomainsIfNeeded,
    deleteObject,
    updateAttributes,
};

export default connect(mapProps, mapActions)(withAuth(Portfolio));
