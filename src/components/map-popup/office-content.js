import React from 'react';
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

const OfficeContent = ({ object: { address } }) => (
    <div className="popup-content">
        <div className="map-popup-item-block">
            <MapPopupItem
                label={'Адрес'}
                text={[address]}
                half={isTextShort([address])}
            />
        </div>
        <RoundedButton
            style={buttonStyle}
            labelStyle={labelButtonStyle}
            label="Реестр сотрудников"
        />
    </div>
);

export default OfficeContent;
