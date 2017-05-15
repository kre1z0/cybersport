import React from 'react';
import './object-filter.scss'
import MapPopupButton from '../button/map-popup-button';
import LayersList from './layers-list'
import ObjectFilterItem from './object-filter-item'
import TextInput from '../text-input'
import DatePicker from '../date-picker'
import SelectField from '../select-field'

const ObjectFilter = () => (
  <div className="object-filter" >
    <div className="object-filter-block" >
      <ObjectFilterItem element={<TextInput/>} label={'text-input'} />
      <ObjectFilterItem
        element={
          <div className="date" >
            <DatePicker />
            <DatePicker />
          </div>
        }
        label={'date'} />
      <ObjectFilterItem element={<SelectField />} label={'select-field'} />
      <div className="object-filter-center" >
        <MapPopupButton style={{ width: 151 }} labelStyle={{ padding: 0 }} label="Сбросить фильтр" />
      </div>
    </div>
    <LayersList />
  </div>
);

export default ObjectFilter;

