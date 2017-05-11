import React from 'react';
import MapPopupAvatar from './avatar'
import MapPopupButton from '../button/map-popup-button';
import MapPopupItem from './map-popup-item'
import { isTextShort } from './isTextShort'

const HomeContent = () => (
  <div className="home-content" >
    <div className="map-popup-header" >
      Домашний адрес
    </div>
    <MapPopupAvatar />
    <div className="map-popup-item-block">
      <MapPopupItem
        label={'ТБ'}
        owner_name={['Московский банк']}
        half={isTextShort(['Московский банк'])}
      />
      <MapPopupItem
        label={'Адрес'}
        owner_name={['г. Москва, ул. Профсоюзная, д. 5']}
        half={isTextShort(['г. Москва, ул. Профсоюзная, д. 5'])}
      />
    </div>
    <MapPopupButton style={{width: 171}} label="Показать в реестре" />
  </div>
);

export default HomeContent;
