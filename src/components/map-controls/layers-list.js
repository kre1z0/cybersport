import React from 'react';
import LayersListItem from './layers-list-item'
import { softGreen, mango, waterMelon, coolGreyThree, brightLavender } from '../../assets/theme'
import home from '../../assets/images/pin_home.png'
import pmz from '../../assets/images/pin_pmz.png'

const LayersList = () => (
  <div className="layers-list">
    <LayersListItem
      label={'Нарушений нет'}
      backgroundColor={softGreen} boxShadowColor={'rgba(100, 199, 108, 0.5)'}
    />
    <LayersListItem
      label={'Незначительные нарушения'}
      backgroundColor={mango} boxShadowColor={'rgba(255, 173, 43, 0.5)'}
    />
    <LayersListItem
      label={'Критические нарушения'}
      backgroundColor={waterMelon} boxShadowColor={'rgba(255, 64, 87, 0.5)'}
    />
    <LayersListItem
      label={'Мониторинг не проводился / не проводится'}
      backgroundColor={coolGreyThree} boxShadowColor={'rgba(152, 161, 171, 0.5)'}
    />
    <LayersListItem
      label={'Перенос сроков мониторинга'}
      backgroundColor={brightLavender} boxShadowColor={'rgba(223, 93, 255, 0.5)'}
    />
    <div className="layers-list-block">
      <LayersListItem
        label={'Офисы ПМЗ'}
        imgSrc={home}
      />
      <LayersListItem
        label={'Домашние адреса сотрудников'}
        imgSrc={pmz}
      />
    </div>
  </div>
);

export default LayersList;
