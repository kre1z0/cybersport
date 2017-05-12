import React, {Component, PropTypes} from 'react';
import sGis from '../../assets/sgis';
import getMap from '../../evergis/map';
import debounce from 'lodash/debounce';

import './map.scss';

class Map extends Component {
    static propTypes = {
        center: PropTypes.array,
        resolution: PropTypes.number,
        onCenterChange: PropTypes.func,
        onResolutionChange: PropTypes.func
    };
    static defaultProps = {
        center: [0, 0],
        resolution: 76.437,
        onCenterChange: () => {},
        onResolutionChange: () => {}
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
    
    onBboxChange = debounce(({sourceObject: {resolution, position}})=>{
        this.onResolutionChange(resolution);
        this.onCenterChange(position);
    }, 500);
    
    componentDidMount () {
        this.map = getMap({
            wrapper: this.container,
            position: this.props.center,
            resolution: this.props.resolution,
        });
        
        this.map.on('bboxChange', this.onBboxChange)
    }
    
    componentWillReceiveProps (nextProps) {
        const newCenter = new sGis.Point(nextProps.center, sGis.CRS.webMercator);
        
        if (!newCenter.equals(this.map.centerPoint)) {
            this.map.position = newCenter.position;
        }
        
        if (nextProps.resolution !== this.map.resolution) {
            this.map.resolution = nextProps.resolution;
        }
    }
    
    componentWillUnmount () {
        this.map.removeListener('bboxChange', this.onBboxChange);
        delete this.map;
    }
    
    render () {
        return (
            <div className="map-container" ref={container => this.container = container}>
    
            </div>
        );
    }
}

export default Map