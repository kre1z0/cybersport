import React from 'react';
import {
    softGreen,
    mango,
    waterMelon,
    brightLavender,
    coolGreyThree,
} from '../../assets/theme';

import './map-popup-header.scss';

const STATUS = {
    1: {
        text: 'нарушений нет',
        color: softGreen,
    },
    2: {
        text: 'незначительные нарушения',
        color: mango,
    },
    3: {
        text: 'критические нарушения',
        color: waterMelon,
    },
    4: {
        text: 'мониторинг не проводился / не проводится',
        color: coolGreyThree,
    },
    5: {
        text: 'нарушений нет',
        color: brightLavender,
    },
};

const MapPopupHeader = ({ status }) => (
    <div className="map-popup-header">
        <div
            style={{ backgroundColor: STATUS[status].color }}
            className="billet"
        >
            {STATUS[status].text}
        </div>
    </div>
);

export default MapPopupHeader;
