import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Loader from 'material-ui/CircularProgress';
import HeaderTitleBlock from '../../components/header-title-block';
import Table from '../../components/table/simple-table';
import { getObjects } from '../../ducks/objects';
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
        console.log(object);
        this.setState(state => ({
            galleryObject: object,
        }));
    };

    closeGallery = () => {
        this.setState(state => ({
            galleryObject: null,
        }));
    };

    render() {
        const { objects: { data, attributes, loading } } = this.props;
        const {
            newObjectOpen,
            columnsSettingsOpen,
            galleryObject,
            query,
        } = this.state;

        const dataJS = data.toJS();
        const attrJS = attributes.toJS();
        const hashKey = Math.random().toString(36);

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
                        cacheKey={hashKey}
                        data={dataJS}
                        getImages={this.getImages}
                        columns={attrJS.filter(({ isVisible }) => isVisible)}
                        query={query}
                        loader={
                            loading && <Loader className="loader overlay" />
                        }
                        onFilterChange={this.changeFilter}
                        onImageClick={this.showGallery}
                    />
                    <NewObjectWindow
                        open={newObjectOpen}
                        onRequestClose={this.closeNewObject}
                    />
                    <ColumnsSettingsWindow
                        open={columnsSettingsOpen}
                        onRequestClose={this.closeColumnsSettings}
                    />
                    <GalleryWindow
                        open={!!galleryObject}
                        object={galleryObject}
                        images={
                            galleryObject &&
                                this.getImages(galleryObject.image_name)
                        }
                        onRequestClose={this.closeGallery}
                        attributes={attrJS}
                    />
                </div>
            </div>
        );
    }
}

const mapProps = ({ objects, user: { staticServiceUrl } }) => ({
    objects,
    staticServiceUrl,
});

const mapActions = {
    getObjects,
    getDomainsIfNeeded,
};

export default connect(mapProps, mapActions)(withAuth(Portfolio));
