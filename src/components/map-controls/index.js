import React, { Component } from 'react';
import IconButton from 'material-ui/IconButton';
import { FilterIcon } from '../icons';
import './map-controls-popup.scss';

const dragIconStyle = {
    width: 14,
    height: 10,
};

const dragButtonStyle = {
    width: 27,
    height: 27,
    padding: 0,
};

class MapControl extends Component {
  render() {
    const {children, style, onCollapse, collapsed} = this.props;
    return (
      <div className='map-control-popup' style={style}>
        <div className="map-popup-control-header">
          Объекты залога
          <IconButton style={dragButtonStyle}
            iconStyle={dragIconStyle}
                       onTouchTap={onCollapse}
          >
            <FilterIcon style={{height: '0.785rem'}} isActive={collapsed} />
          </IconButton>
        </div>
        {children}
      </div>
    )
  }
}

export default MapControl;
