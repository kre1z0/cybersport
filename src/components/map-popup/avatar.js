import React from 'react';
import Avatar from 'material-ui/Avatar';
import './avatar.scss'

const avatarStyle = {
  height: '46px',
  width: '46px'
};

const MapPopupAvatar = ({img, label, text}) => (
  <div className="map-popup-avatar">
    <Avatar style={avatarStyle} src={img}/>
    <div className="map-popup-avatar-flex">
      <div className="map-popup-avatar-label">
          {label}
      </div>
      <div className="map-popup-avatar-content">
          {text}
      </div>
    </div>
  </div>
);

export default MapPopupAvatar;