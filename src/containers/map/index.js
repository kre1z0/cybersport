/**
 * Created by tporyadin on 3/6/2017.
 */
import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import Loader from 'material-ui/CircularProgress';

import {setCenter, setResolution, loadMapServices, pickObject} from '../../ducks/map';
import getLayerManager, {isServicesLoaded} from '../../evergis/layer-manager';
import {setDataFilters} from '../../evergis/api';

import Map from '../../components/map';
import LayersList from './layer-list';
import FeaturePopup from './feature-popup';


import {OBJECTS_SERVICE, OFFICES_SERVICE, EMPLOYEES_SERVICE} from '../../evergis/helpers';

import './map.scss';

class MapContainer extends Component {
    static propTypes = {
        map: PropTypes.object,
        setCenter: PropTypes.func,
        setResolution: PropTypes.func,
        setObjectsDataFilter: PropTypes.func,
        loadMapServices: PropTypes.func,
        isAuth: PropTypes.bool
    };
    
    componentDidMount () {
        const {loadMapServices, isAuth} = this.props;
        if (isAuth && !isServicesLoaded()) {
            loadMapServices().then(services => {
                this.updateServices(services, this.props.map);
            });
        }
    }
    
    componentWillReceiveProps ({loadMapServices, map, isAuth}) {
        if(isAuth){
            if(!this.props.isAuth && !map.loading && !isServicesLoaded()) {
                loadMapServices().then(services => {
                    this.updateServices(services, map);
                });
            }

            if(this.props.map.objectsDataFilter !== map.objectsDataFilter) {
                const layerManager = getLayerManager();
                const sber_service = layerManager.getService(OBJECTS_SERVICE);
                let df = sber_service.dataFilter;
                df.condition = this.setFilter(map.objectsDataFilter.toJS());
                sber_service.setDataFilter(df);
            }

            if(this.props.map.showOffices !== map.showOffices){
                const layerManager = getLayerManager();
                const offices_service = layerManager.getService(OFFICES_SERVICE);
                offices_service.isDisplayed = map.showOffices
            }

            if(this.props.map.showHomeAddress !== map.showHomeAddress){
                const layerManager = getLayerManager();
                const employess_service = layerManager.getService(EMPLOYEES_SERVICE);
                employess_service.isDisplayed = map.showHomeAddress
            }
        }
    }
    
    updateServices (services, map) {
        const layerManager = getLayerManager();
        services.forEach(({name, isVisible}) => {
            const service = layerManager.getService(name);

            if(name === OBJECTS_SERVICE) {
                let df = service.dataFilter;
                df.condition = this.setFilter(map.objectsDataFilter.toJS());
                service.setDataFilter(df);
            }

            if (service) {
                service.isDisplayed = isVisible;
            }
        });
    }

    setFilter(filter){
        let filterArray = [];
        let toServiceFilter = null;
        for(let f in filter){
            if(!filter[f]) filterArray.push('status != ' + f)
        }
        if(filterArray.length > 0){
            toServiceFilter = filterArray.join(' && ')
        }
        return toServiceFilter;
    }

    onMapPick = (e) => {
        this.props.pickObject(e.point);
    };

    render () {
        const {map, setCenter, setResolution, isAuth} = this.props;
        
        return (
            <div className="map-container">
                {
                    isAuth
                        ? <Map center={map.center}
                               resolution={map.resolution}
                               onCenterChange={setCenter}
                               onResolutionChange={setResolution}
                               onMapPick={this.onMapPick}
                    />
                        : <Loader className="loader"/>
                }
                <LayersList />
                <FeaturePopup/>
            </div>
        );
    }
}

const mapProps = ({map, user: {employee_id}}) => ({
    map,
    isAuth: !!employee_id
});

const mapActions = {
    setCenter,
    setResolution,
    loadMapServices,
    pickObject
};

export default connect(mapProps, mapActions)(MapContainer);



