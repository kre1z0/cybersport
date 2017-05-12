/**
 * Created by tporyadin on 3/6/2017.
 */
import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import Loader from 'material-ui/CircularProgress';

import {setCenter, setResolution, loadMapServices} from '../../ducks/map';
import getLayerManager from '../../evergis/layer-manager';

import Map from '../../components/map';

class MapContainer extends Component {
    static propTypes = {
        map: PropTypes.object,
        setCenter: PropTypes.func,
        setResolution: PropTypes.func
    };
    
    componentDidMount () {
        const {loadMapServices, isAuth, map} = this.props;
        isAuth && map.services.size === 0 && loadMapServices();
    }
    
    componentWillReceiveProps ({loadMapServices, map, isAuth}) {
        !this.props.isAuth && isAuth && !map.loading && map.services.size === 0 && loadMapServices();
        
        if (isAuth && map.services !== this.props.map.services) {
            this.updateServices(map.services);
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
        const {map, setCenter, setResolution, isAuth} = this.props;
        
        return (
            isAuth
                ? <Map center={map.center}
                     resolution={map.resolution}
                     onCenterChange={setCenter}
                     onResolutionChange={setResolution}
                  />
                : <Loader className="loader"/>
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
    loadMapServices
};

export default connect(mapProps, mapActions)(MapContainer);



