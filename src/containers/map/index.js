/**
 * Created by tporyadin on 3/6/2017.
 */
import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';

import {setCenter, setResolution} from '../../ducks/map';

import Map from '../../components/map';

class MapContainer extends Component {
    static propTypes = {
        map: PropTypes.object,
        setCenter: PropTypes.func,
        setResolution: PropTypes.func
    };
    
    render () {
        const {map, setCenter, setResolution} = this.props;
        
        return (
            <Map center={map.center}
                 resolution={map.resolution}
                 onCenterChange={setCenter}
                 onResolutionChange={setResolution}
            />
        );
    }
}

const mapProps = ({map}) => ({
    map
});

const mapActions = {
    setCenter,
    setResolution
};

export default connect(mapProps, mapActions)(MapContainer);



