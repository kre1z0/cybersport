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

const HomeContent = ({
    object: { home_address_details, tb_name, full_name, role_name },
}) => (
    <div className="popup-content">
        <MapPopupAvatar label={role_name} text={full_name} />
        <div className="map-popup-item-block">
            <MapPopupItem
                label={'ТБ'}
                text={[tb_name]}
                half={isTextShort([tb_name])}
            />
            <MapPopupItem
                label={'Адрес'}
                text={[home_address_details]}
                half={isTextShort([home_address_details])}
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
