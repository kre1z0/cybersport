/**
 * Created by tporyadin on 3/6/2017.
 */
import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import Loader from 'material-ui/CircularProgress';

import {setCenter, setResolution, loadMapServices} from '../../ducks/map';
import getLayerManager, {isServicesLoaded} from '../../evergis/layer-manager';

import Map from '../../components/map';
import LayersList from './layer-list';

import './map.scss';

class MapContainer extends Component {
    static propTypes = {
        map: PropTypes.object,
        setCenter: PropTypes.func,
        setResolution: PropTypes.func
    };
    
    componentDidMount () {
        const {loadMapServices, isAuth} = this.props;
        if (isAuth && !isServicesLoaded()) {
            loadMapServices().then(services => {
                this.updateServices(services);
            });
        }
    }
    
    componentWillReceiveProps ({loadMapServices, map, isAuth}) {
        if(!this.props.isAuth && isAuth && !map.loading && !isServicesLoaded()) {
            loadMapServices().then(services => {
                this.updateServices(services);
            });
        }
    }
    
    updateServices (services) {
        const layerManager = getLayerManager();
        services.forEach(({name, isVisible}) => {
            const service = layerManager.getService(name);
            if (service) {
                service.isDisplayed = isVisible;
            }
        });
    }
    
    render () {
        const {map, setCenter, setResolution, isAuth, selectedMapFeatures = true} = this.props;
        
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
                <LayersList/>
            </div>
        );
    }
}

const mapProps = ({map, user: {employee_id}, selectedMapFeatures}) => ({
    map,
    isAuth: !!employee_id,
    selectedMapFeatures
});

const mapActions = {
    setCenter,
    setResolution,
    loadMapServices
};

export default connect(mapProps, mapActions)(MapContainer);



