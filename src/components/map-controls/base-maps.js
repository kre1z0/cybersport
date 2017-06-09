import React, { Component } from 'react';
import './base-maps.scss';
import cn from 'classnames';

const popupStyle = {
    wrapper: show => ({
        display: show ? 'block' : 'none',
        position: 'absolute',
        bottom: '1rem',
        left: '5rem',
    }),
};

const baseMaps = ['2gis', 'osm'];
const classNames = {
    '2gis': 'doubleGIS',
    osm: 'osm',
};

class BaseMap extends Component {
    handleChangeMap = map => {
        const { onChange } = this.props;
        onChange(map);
    };

    render() {
        const { showTime, currentMap } = this.props;
        return (
            <div
                className="map-control-popup basemap-popup"
                style={popupStyle.wrapper(showTime)}
            >
                <div className="map-popup-control-header">Базовые карты</div>
                <div className="base-maps">
                    {baseMaps.map(map => (
                        <div
                            className="base-map"
                            onClick={() => {
                                this.handleChangeMap(map);
                            }}
                        >
                            <div
                                className={cn('button', classNames[map], {
                                    selected: map === currentMap,
                                })}
                            />
                            <div className="name">{map}</div>
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}

export default BaseMap;
