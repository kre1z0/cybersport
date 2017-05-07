import React from 'react';
import Avatar from 'material-ui/Avatar';
import './avatar.scss'

const avatarStyle = {
  height: '46px',
  width: '46px'
};

const MapPopupAvatar = () => (
  <div className="map-popup-avatar">
    <Avatar style={avatarStyle} src='https://i2.wp.com/iknowyourmeme.files.wordpress.com/2016/07/photo.png?w=388&h=388&crop=1&ssl=1'/>
    <div className="map-popup-avatar-flex">
      <div className="map-popup-avatar-label">
        Сотрудник
      </div>
      <div className="map-popup-avatar-content">
        Иванов. И.И.
      </div>
    </div>
  </div>
);

export default MapPopupAvatar;