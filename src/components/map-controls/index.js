import React, { Component } from 'react';
import IconButton from 'material-ui/IconButton';
import { FilterIcon, CloseMapPopupIcon } from '../icons';
import './map-controls-popup.scss';

const dragIconStyle = {
    width: 14,
    height: 10,
};

const collapseButtonStyle = {
    width: 27,
    height: 27,
    padding: 0,
    marginRight: '10px',
};

const closeButtonStyle = {
    width: 27,
    height: 27,
    padding: 0,
};

class MapControl extends Component {
    render() {
        const { children, style, onCollapse, collapsed, onClose } = this.props;
        return (
            <div className="map-control-popup" style={style}>
                <div className="map-popup-control-header">
                    <div
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                        }}
                    >
                        <IconButton
                            style={collapseButtonStyle}
                            iconStyle={dragIconStyle}
                            onTouchTap={onCollapse}
                        >
                            <FilterIcon isActive={collapsed} />
                        </IconButton>
                        Объекты залога
                    </div>
                    <div>

                        <IconButton
                            style={closeButtonStyle}
                            iconStyle={dragIconStyle}
                            onTouchTap={onClose}
                        >
                            <CloseMapPopupIcon
                                svgStyle={{
                                    width: '12px',
                                    height: '12px',
                                }}
                            />
                        </IconButton>
                    </div>

                </div>
                {children}
            </div>
        );
    }
}

export default MapControl;
