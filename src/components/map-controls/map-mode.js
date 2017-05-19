import React from 'react';
import classNames from 'classnames';
import './map-mode.scss';

const MapModeItem = ({ isActive, imgSrc, label }) => {
    const active = classNames('map-mode-item', { active: isActive === true });
    return (
        <div className={active}>
            <div className="circle">
                <img src={imgSrc} alt={label} />
            </div>
            <div className="label">
                {label}
            </div>
        </div>
    );
};

const MapMode = () => (
    <div className="map-mode-control-popup">
        <div className="map-popup-control-header">
            Базовые карты
        </div>
        <div className="map-mode-item-block">
            <MapModeItem
                isActive={false}
                imgSrc={
                    'http://www.telegraph.co.uk/content/dam/news/2016/11/27/dump-tower-twitter-large_trans_NvBQzQNjv4BqeY8zn44CJx5co60z9sMGTUWjmulo7wva9c-kqRbE-Zc.jpg'
                }
                label={'2ГИС'}
            />
            <MapModeItem
                isActive={true}
                imgSrc={
                    'http://www.telegraph.co.uk/content/dam/news/2016/11/27/dump-tower-twitter-large_trans_NvBQzQNjv4BqeY8zn44CJx5co60z9sMGTUWjmulo7wva9c-kqRbE-Zc.jpg'
                }
                label={'OSM'}
            />
        </div>
    </div>
);

export default MapMode;
