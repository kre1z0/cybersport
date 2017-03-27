import React, {Component, PropTypes} from 'react';
import sGis from '../../assets/sgis';

import './map.css';

class Map extends Component {
    static propTypes = {
        center: PropTypes.array.isRequired,
        onCenterChange: PropTypes.func.isRequired
    };
    
    componentDidMount () {
        const point = new sGis.Point([59.94, 30.43]).projectTo(sGis.CRS.webMercator);
        const gis = sGis.init({
            wrapper: this.container,
            position: point.position,
            resolution: 76.437,
            layers: [ new sGis.TileLayer('http://b.tile.openstreetmap.org/{z}/{x}/{y}.png') ]
        });
        gis.map.on('click', function(sGisEvent) {
            gis.map.animateTo(sGisEvent.point, gis.map.resolution / 2);
        });
    }
    
    render () {
        return (
            <div className="map-container" ref={container => this.container = container}>
    
            </div>
        );
    }
}

export default Map