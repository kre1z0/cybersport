import React from 'react';
import './object-filter.scss';
import LayersList from './layers-list';
import ObjectFilterItem from './object-filter-item';
import TextInput from '../text-input';
import DatePicker from '../date-picker';
import SelectField from '../select-field';
import { paleGrey, darkGrey } from '../../assets/theme';
import RoundedButton from '../../components/button/rounded-button';

const buttonStyle = {
    width: 151,
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

const ObjectFilter = () => (
    <div className="object-filter">
        <div className="object-filter-block">
            <ObjectFilterItem element={<TextInput />} label={'text-input'} />
            <ObjectFilterItem
                element={
                    <div className="date">
                        <DatePicker />
                        <DatePicker />
                    </div>
                }
                label={'date'}
            />
            <ObjectFilterItem
                element={<SelectField />}
                label={'select-field'}
            />
            <div className="object-filter-center">
                <RoundedButton
                    style={buttonStyle}
                    labelStyle={labelButtonStyle}
                    label="Сбросить фильтр"
                />
            </div>
        </div>
        <LayersList />
    </div>
);

export default ObjectFilter;
