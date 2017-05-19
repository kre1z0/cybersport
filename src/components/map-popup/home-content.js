import React from 'react';
import MapPopupAvatar from './avatar';
import MapPopupItem from './map-popup-item';
import { isTextShort } from './isTextShort';
import { paleGrey, darkGrey } from '../../assets/theme';
import RoundedButton from '../../components/button/rounded-button';

const buttonStyle = {
    width: 171,
    margin: 0,
    boxShadow: 'none',
    border: '1px solid',
    borderColor: paleGrey,
};

const labelButtonStyle = {
    padding: 0,
    textTransform: 'none',
    color: darkGrey,
    fontWeight: 400,
};

const HomeContent = () => (
    <div className="home-content">
        <div className="map-popup-header">
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
        <RoundedButton
            style={buttonStyle}
            labelStyle={labelButtonStyle}
            label="Показать в реестре"
        />
    </div>
);

export default HomeContent;
