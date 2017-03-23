import React, {Component, PropTypes} from 'react';

import './map.css';

class Map extends Component {
    static propTypes = {
        center: PropTypes.array.isRequired,
        onCenterChange: PropTypes.func.isRequired,
        onResetMap: PropTypes.func.isRequired
    };
    
    onButtonClick = () => {
        const {center, onCenterChange} = this.props;
        onCenterChange([center[0]-1, center[1]+1])
    };
    
    render () {
        const {center, onResetMap} = this.props;
        return (
            <div className="map-container" ref={container => this.container = container}>
                <button onTouchTap={this.onButtonClick}>setCenter</button>
                <button onTouchTap={onResetMap}>resetMap</button>
                <span>{`[${center[0]}][${center[1]}]`}</span>
            </div>
        );
    }
}

export default Map