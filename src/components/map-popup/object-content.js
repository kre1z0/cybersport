import React from 'react';
import MapPopupButton from '../button/map-popup-button';
import MapPopupAvatar from './avatar'
import { softGreen, mango, waterMelon, coolGreyThree, brightLavender } from '../../assets/theme'

const ObjectContent = () => (
  <div className="object-content" >
    <div className="map-popup-header" >
      <div style={{backgroundColor: softGreen}} className="billet" >
        проверен без нарушений
      </div>
    </div>
    <MapPopupAvatar />
    <MapPopupButton style={{width: 163}} labelStyle={{padding: 0}} label="Показать в реестре" />
    <MapPopupButton style={{width: 163, float: 'right'}} label="Создать задачу" />
  </div>
);

export default ObjectContent;
