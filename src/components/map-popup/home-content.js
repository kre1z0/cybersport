import React from 'react';
import MapPopupAvatar from './avatar'
import MapPopupButton from '../button/map-popup-button';

const HomeContent = () => (
  <div className="home-content" >
    <div className="map-popup-header" >
      Домашний адрес
    </div>
    <MapPopupAvatar />
    <div className="office-home-block">
      <div className="office-home-item">
        <div className="office-home-item-label">
          ТБ
        </div>
        <div className="office-home-item-content">
          Московский банк
        </div>
      </div>
      <div className="office-home-item">
        <div className="office-home-item-label">
          Адрес
        </div>
        <div className="office-home-item-content">
          г. Москва, Проспект Мира, д. 1
        </div>
      </div>
    </div>
    <MapPopupButton style={{width: 171}} label="Показать в реестре" />
  </div>
);

export default HomeContent;
