import React from 'react';
import MapPopupButton from '../button/map-popup-button';

const OfficeContent = () => (
  <div className="office-content" >
    <div className="map-popup-header" >
      Офис ПМЗ
    </div>
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
    <MapPopupButton style={{width: 171}} label="Реестр сотрудников" />
  </div>
);

export default OfficeContent;
