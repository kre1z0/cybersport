/**
 * Created by tporyadin on 3/6/2017.
 */
import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import Loader from 'material-ui/CircularProgress';

import {setCenter, setResolution, setObjectsDataFilter, loadMapServices} from '../../ducks/map';
import getLayerManager, {isServicesLoaded} from '../../evergis/layer-manager';
import {setDataFilters} from '../../evergis/api';

import Map from '../../components/map';
import MapControl from '../../components/map-controls'
import LayersList from '../../components/map-controls/layers-list';

import './map.scss';

const layerListStyle = {
    position: 'absolute',
    top: '1rem',
    left: '1rem'
};

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
        if(!this.props.isAuth && isAuth && !map.loading && !isServicesLoaded()) {
            loadMapServices().then(services => {
                this.updateServices(services, map);
            });
        }

        let checkStatus = false;
        for(let i in map.objectsDataFilter){
            if(this.props.map.objectsDataFilter[i] !== map.objectsDataFilter[i]) checkStatus = true;
        }
        if(checkStatus && isAuth) {
            const layerManager = getLayerManager();
            const sber_service = layerManager.getService('sber_objects');
            let df = sber_service.dataFilter;
            df.condition = this.setFilter(map.objectsDataFilter);
            sber_service.setDataFilter(df);
        }
    }
    
    updateServices (services, map) {
        const layerManager = getLayerManager();
        services.forEach(({name, isVisible}) => {
            const service = layerManager.getService(name);

            if(name === 'sber_objects') {
                let df = service.dataFilter;
                df.condition = this.setFilter(map.objectsDataFilter);
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
    
    render () {
        const {map, setCenter, setResolution, setObjectsDataFilter, isAuth} = this.props;
        
        return (
            <div className="map-container">
                {
                    isAuth
                        ? <Map center={map.center}
                               resolution={map.resolution}
                               onCenterChange={setCenter}
                               onResolutionChange={setResolution}
                    />
                        : <Loader className="loader"/>
                }
                <MapControl style={layerListStyle}>
                    <LayersList objectsDataFilter={map.objectsDataFilter} onChangeItem={setObjectsDataFilter}/>
                </MapControl>
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
    setObjectsDataFilter,
    loadMapServices
};

export default connect(mapProps, mapActions)(MapContainer);



