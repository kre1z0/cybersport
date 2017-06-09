/**
 * Created by tporyadin on 3/6/2017.
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import withAuth from '../../hoc/withAuth';

import {
    setCenter,
    setResolution,
    loadMapServicesIfNeeded,
    selectObject,
    changeBaseMap,
} from '../../ducks/map';
import { getDomainsIfNeeded } from '../../ducks/domains';
import getLayerManager from '../../evergis/layer-manager';
import { getFeatureLayer } from '../../evergis/map';

import Map from '../../components/map';
import LayersList from './layer-list';
import FeaturePopup from './feature-popup';
import BaseMap from '../../components/map-controls/base-maps';

import FloatingActionButton from 'material-ui/FloatingActionButton';

import { MapLayers, BasemapsIcon } from '../../components/icons';

import {
    OBJECTS_SERVICE,
    OFFICES_SERVICE,
    EMPLOYEES_SERVICE,
} from '../../evergis/helpers';

import './map.scss';

const floatButtonStyles = {
    button: {
        position: 'absolute',
        top: '1rem',
        left: '1rem',
        zIndex: 1,
    },
    buttonBaseMaps: {
        position: 'absolute',
        bottom: '1rem',
        left: '1rem',
        zIndex: 1,
    },
    svg: { height: '15px', width: '16px', verticalAlign: 'sub' },
};

class MapContainer extends Component {
    state = {
        showPopup: false,
        showBaseMaps: false,
    };

    static propTypes = {
        map: PropTypes.object,
        setCenter: PropTypes.func,
        setResolution: PropTypes.func,
        setObjectsDataFilter: PropTypes.func,
        loadMapServices: PropTypes.func,
        isAuth: PropTypes.bool,
    };

    componentDidMount() {
        const { loadMapServicesIfNeeded, getDomainsIfNeeded, map } = this.props;
        loadMapServicesIfNeeded().then(services => {
            services && this.updateServices(services, map);
        });
        getDomainsIfNeeded();
    }

    componentWillReceiveProps({ map }) {
        if (this.props.map.basemap !== map.basemap) {
            this.updateServices(map.services, map);
        }
        if (
            this.props.map.objectsDataFilter !== map.objectsDataFilter ||
            this.props.map.domainsFilter !== map.domainsFilter
        ) {
            const layerManager = getLayerManager();
            const sber_service = layerManager.getService(OBJECTS_SERVICE);
            let df = sber_service.dataFilter;
            df.condition = this.getFilter(
                map.objectsDataFilter.toJS(), //todo
                map.domainsFilter,
            );
            sber_service.setDataFilter(df);
            sber_service.layer.redraw();
        }

        if (this.props.map.showOffices !== map.showOffices) {
            const offices_layer = getFeatureLayer(OFFICES_SERVICE);
            offices_layer.isDisplayed = map.showOffices; //todo
        }

        if (this.props.map.showHomeAddress !== map.showHomeAddress) {
            const employess_layer = getFeatureLayer(EMPLOYEES_SERVICE);
            employess_layer.isDisplayed = map.showHomeAddress; //todo
        }
    }

    updateServices(services, map) {
        const layerManager = getLayerManager();
        if (!services.forEach) {
            throw Error('Error in service init');
            return;
        }
        services.forEach(({ name, isVisible }) => {
            const service = layerManager.getService(name);

            if (name === OBJECTS_SERVICE) {
                let df = service.dataFilter;
                df.condition = this.getFilter(
                    map.objectsDataFilter.toJS(),
                    map.domainsFilter,
                );
                service.setDataFilter(df);
                service.layer.redraw();
            }

            if (service) {
                service.isDisplayed = isVisible;
            }
        });
    }

    getFilter(filter, domains) {
        let filterArray = [];
        let toServiceFilter = null;
        for (let f in filter) {
            if (!filter[f]) filterArray.push('status != ' + f);
        }
        if (filterArray.length > 0) {
            toServiceFilter = filterArray.join(' && ');
        }
        return (
            (toServiceFilter &&
                domains &&
                toServiceFilter + ' && ' + domains) ||
            toServiceFilter ||
            domains
        );
    }

    onMapClick = e => {
        this.props.selectObject({ objects: [] });
    };

    handleShowPopup = () => {
        this.setState(state => ({
            showPopup: !state.showPopup,
        }));
    };

    handleShowBaseMaps = () => {
        this.setState(state => ({
            showBaseMaps: !state.showBaseMaps,
        }));
    };

    render() {
        const { map, setCenter, setResolution, changeBaseMap } = this.props;
        const { showPopup, showBaseMaps } = this.state;

        return (
            <div className="map-container">
                <Map
                    center={map.center}
                    resolution={map.resolution}
                    onCenterChange={setCenter}
                    onResolutionChange={setResolution}
                    onMapClick={this.onMapClick}
                />
                <FloatingActionButton
                    style={floatButtonStyles.button}
                    backgroundColor="#fff"
                    onTouchTap={this.handleShowPopup}
                >
                    <MapLayers
                        style={floatButtonStyles.svg}
                        isActive={showPopup}
                    />
                </FloatingActionButton>
                <LayersList
                    showTime={showPopup}
                    onClose={this.handleShowPopup}
                />

                <FloatingActionButton
                    style={floatButtonStyles.buttonBaseMaps}
                    backgroundColor="#fff"
                    onTouchTap={this.handleShowBaseMaps}
                >
                    <BasemapsIcon
                        style={floatButtonStyles.svg}
                        isActive={showBaseMaps}
                    />
                </FloatingActionButton>
                <BaseMap
                    showTime={showBaseMaps}
                    currentMap={map.basemap}
                    onChange={changeBaseMap}
                />

                <FeaturePopup />
            </div>
        );
    }
}

const mapProps = ({ map }) => ({
    map,
});

const mapActions = {
    changeBaseMap,
    setCenter,
    setResolution,
    loadMapServicesIfNeeded,
    selectObject,
    getDomainsIfNeeded,
};

export default connect(mapProps, mapActions)(withAuth(MapContainer));
