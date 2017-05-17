import React from 'react';
import classNames from 'classnames';

const MapPopupItem = ({ label, text, half }) => {
  const itemClass = classNames('map-popup-item',
    { half: half === true });
  return (
    <div className={itemClass} >
      <div className="map-popup-item-label" >
        {label}
      </div>
      {text && text.map((item, index) =>
        <div key={`${item}${index}`} className="map-popup-item-content" >
          {item}
        </div>
      )}
    </div>
  )
};

export default MapPopupItem;
