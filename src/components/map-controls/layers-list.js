import React from 'react';
import LayersListItem from './layers-list-item'
import { softGreen, mango, waterMelon, coolGreyThree, brightLavender } from '../../assets/theme'
import home from '../../assets/images/pin_home.png'
import pmz from '../../assets/images/pin_pmz.png'

const filters = [
    {
        label: "Нарушений нет",
        backgroundColor: softGreen,
        boxShadowColor: 'rgba(100, 199, 108, 0.5)'
    },
    {
        label: "Незначительные нарушения",
        backgroundColor: mango,
        boxShadowColor: 'rgba(255, 173, 43, 0.5)'
    },
    {
        label: "Критические нарушения",
        backgroundColor: waterMelon,
        boxShadowColor: 'rgba(255, 64, 87, 0.5)'
    },
    {
        label: "Мониторинг не проводился / не проводится",
        backgroundColor: coolGreyThree,
        boxShadowColor: 'rgba(152, 161, 171, 0.5)'
    },
    {
        label: "Перенос сроков мониторинга",
        backgroundColor: brightLavender,
        boxShadowColor: 'rgba(223, 93, 255, 0.5)'
    },
];

const LayersList = ({objectsDataFilter, showOffices, showHomeAddress, onChangeItem, setShowOffices, setShowHomeAddress}) => (
  <div className="layers-list">
      {filters.map((filter, index) => <LayersListItem
          onChange={onChangeItem}
          layerNumber={index + 1}
          checked={objectsDataFilter[index + 1]}
          key={filter.label}
          label={filter.label}
          backgroundColor={filter.backgroundColor} boxShadowColor={filter.boxShadowColor}
      />)}
    <div className="layers-list-block">
      <LayersListItem
        onChange={setShowOffices}
        checked={showOffices}
        label={'Домашние адреса сотрудников'}
        imgSrc={pmz}
      />
      <LayersListItem
        onChange={setShowHomeAddress}
        checked={showHomeAddress}
        label={'Офисы ПМЗ'}
        imgSrc={home}
      />
    </div>
  </div>
);

export default LayersList;
