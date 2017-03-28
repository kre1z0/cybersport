import React, {Component, PropTypes} from 'react';
import sGis from '../../assets/sgis';
import debounce from 'lodash/debounce';

import './map.css';

class Map extends Component {
    static propTypes = {
        center: PropTypes.array,
        resolution: PropTypes.number,
        onCenterChange: PropTypes.func,
        onResolutionChange: PropTypes.func
    };
    static defaultProps = {
        center: [0, 0],
        resolution: 76.437
    };
    
    onResolutionChange = (resolution) => {
        if (resolution !== this.props.resolution) {
            this.props.onResolutionChange(resolution);
        }
    };
    
    onCenterChange = (position) => {
        const newCenter = new sGis.Point(position, sGis.CRS.webMercator);
        const oldCenter = new sGis.Point(this.props.center, sGis.CRS.webMercator);
        if (!newCenter.equals(oldCenter)) {
            this.props.onCenterChange(newCenter.position);
        }
    };
    
    componentDidMount () {
        this.sgis = sGis.init({
            wrapper: this.container,
            position: this.props.center,
            resolution: 76.437,
            layers: [ new sGis.TileLayer('http://b.tile.openstreetmap.org/{z}/{x}/{y}.png') ]
        });
        
        this.sgis.map.on('bboxChange', debounce(({sourceObject: {resolution, position}})=>{
                this.onResolutionChange(resolution);
                this.onCenterChange(position);
        }, 500))
    }
    
    componentWillReceiveProps (nextProps) {
        const newCenter = new sGis.Point(nextProps.center, sGis.CRS.webMercator);
        
        if (!newCenter.equals(this.sgis.map.centerPoint)) {
            this.sgis.map.position = newCenter.position;
        }
        
        if (nextProps.resolution !== this.sgis.map.resolution) {
            this.sgis.map.resolution = nextProps.resolution;
        }
    }
    
    componentWillUnmount () {
        delete this.sgis;
    }
    
    render () {
        return (
            <div className="map-container" ref={container => this.container = container}>
    
            </div>
        );
    }
}

export default Map