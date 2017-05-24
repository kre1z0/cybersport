import React from 'react';
import MapPopupAvatar from './avatar';
import MapPopupItem from './map-popup-item';
import { isTextShort } from './isTextShort';
import { paleGrey, darkGrey, coolGreyTwo } from '../../assets/theme';
import RoundedButton from '../../components/button/rounded-button';
import MapPopupHeader from './map-popup-header';
import IconButton from 'material-ui/IconButton';
import { PageBack, PageNext } from '../icons';

import moment from 'moment';
import numeral from 'numeral';

const buttonStyle = {
    width: 163,
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

const svgStyle = {
    height: 10,
    width: 6,
};

const paginationButtonStyle = {
    width: 36,
    height: 36,
    padding: 0,
};

const PageBackButton = props => (
    <IconButton {...props} style={paginationButtonStyle}>
        <PageBack svgColor={coolGreyTwo} svgStyle={svgStyle} />
    </IconButton>
);

const PageNextButton = props => (
    <IconButton {...props} style={paginationButtonStyle}>
        <PageNext svgColor={coolGreyTwo} svgStyle={svgStyle} />
    </IconButton>
);

const ObjectContent = ({
    current,
    count,
    object: {
        classifier1,
        classifier2,
        classifier3,
        classifier4,
        object_quality_category,
        liquidity,
        actual_full_value,
        address_adjusted,
        address_combined,
        owner_name,
        contacts,
        contract_no,
        contract_start_date,
        contract_end_date,
        image_name,
        gid,
        object_description,
        last_check_date,
        last_actualization_date,
        status,
    },
    staticServiceUrl,
    onNext,
    onPrev,
}) => {
    return (
        <div className="object-content">

            <MapPopupHeader status={status} />

            <MapPopupAvatar
                img={
                    staticServiceUrl &&
                        image_name &&
                        staticServiceUrl.replace('{{filename}}', image_name)
                }
                label={gid}
                text={object_description}
            />

            <div className="map-popup-item-block">
                <MapPopupItem
                    label={'Вид'}
                    text={[
                        classifier4 ||
                            classifier3 ||
                            classifier2 ||
                            classifier1 ||
                            '',
                    ]}
                    half={isTextShort([
                        classifier4 ||
                            classifier3 ||
                            classifier2 ||
                            classifier1 ||
                            '',
                    ])}
                />
                <MapPopupItem
                    label={'Категория качества'}
                    text={[object_quality_category]}
                    half={true}
                />
                <MapPopupItem
                    label={'Ликвидность'}
                    text={[liquidity]}
                    half={isTextShort([liquidity])}
                />
                <MapPopupItem
                    label={'Оценочная стоимость, руб.'}
                    text={[numeral(actual_full_value).format('0,0')]}
                    half={isTextShort([actual_full_value])}
                />
                <MapPopupItem
                    label={'Адрес'}
                    text={[address_adjusted || address_combined]}
                    half={isTextShort([address_adjusted || address_combined])}
                />
                <MapPopupItem
                    label={'Залогодатель'}
                    text={[owner_name, contacts]}
                    half={isTextShort([owner_name, contacts])}
                />
                <MapPopupItem
                    label={'Договор залога'}
                    text={[
                        contract_no,
                        contract_start_date &&
                            moment(contract_start_date).format('L'),
                        contract_end_date &&
                            moment(contract_end_date).format('L'),
                    ]}
                    half={isTextShort([
                        contract_no,
                        moment(contract_start_date).format('L'),
                        moment(contract_end_date).format('L'),
                    ])}
                />
            </div>

            <div className="verification-update-block">
                <div className="map-popup-item-block">
                    <MapPopupItem
                        label={'Последняя проверка'}
                        text={[
                            last_check_date &&
                                moment(last_check_date).format('L'),
                        ]}
                        half={isTextShort([
                            moment(last_check_date).format('L'),
                        ])}
                    />
                    <MapPopupItem
                        label={'Последняя актуализация'}
                        text={[
                            last_actualization_date &&
                                moment(last_actualization_date).format('L'),
                        ]}
                        half={isTextShort([
                            moment(last_actualization_date).format('L'),
                        ])}
                    />
                    <MapPopupItem
                        label={'Плановая проверка'}
                        text={['']}
                        half={isTextShort(['22.01.2018'])}
                    />
                    <MapPopupItem
                        label={'Плановая актуализация'}
                        text={['']}
                        half={isTextShort(['22.01.2018'])}
                    />
                </div>
            </div>

            <RoundedButton
                style={buttonStyle}
                labelStyle={labelButtonStyle}
                label="Показать в реестре"
            />
            <div style={{ float: 'right' }}>
                <RoundedButton
                    style={buttonStyle}
                    labelStyle={labelButtonStyle}
                    label="Создать задачу"
                />
            </div>
            {count &&
                <div className="object-cluster-footer">
                    <PageBackButton onTouchTap={onPrev} />
                    <div className="page-numbers">
                        {`${current} из ${count}`}
                    </div>
                    <PageNextButton onTouchTap={onNext} />
                </div>}
        </div>
    );
};

export default ObjectContent;
