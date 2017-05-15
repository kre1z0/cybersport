import React from 'react';
import MapPopupAvatar from './avatar'
import MapPopupItem from './map-popup-item'
import { isTextShort } from './isTextShort'
import { softGreen, paleGrey, darkGrey, mango, waterMelon, coolGreyThree, brightLavender } from '../../assets/theme'
import RoundedButton from '../../components/button/rounded-button'

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
  fontWeight: 400
};

const ObjectContent = () => {
  return (
    <div className="object-content" >

      <div className="map-popup-header" >
        <div style={{ backgroundColor: softGreen }} className="billet" >
          проверен без нарушений
        </div>
      </div>

      <MapPopupAvatar />

      <div className="map-popup-item-block">
        <MapPopupItem
          label={'Вид'}
          owner_name={['Коммерческая недвижимость']}
          half={isTextShort(['Коммерческая недвижимость'])}
        />
        <MapPopupItem label={'Категория качества'}
          owner_name={['Основное']}
          half={true}
        />
        <MapPopupItem label={'Ликвидность'}
          owner_name={['Высокая']}
          half={isTextShort(['Высокая'])}
        />
        <MapPopupItem label={'Оценочная стоимость, руб.'}
          owner_name={['90 100 000,00']}
          half={isTextShort(['90 100 000,00', 'Оценочная стоимость, руб.'])}
        />
        <MapPopupItem label={'Адрес'}
          owner_name={['Московская область, г. Королев, ул. Ленинская, д. 1']}
          half={isTextShort(['Московская область, г. Королев, ул. Ленинская, д. 1'])}
        />
        <MapPopupItem label={'Залогодатель'}
          owner_name={['ООО "Ромашка"', 'Иванов И.И.', '+7 (495) 555-55-55']}
          half={isTextShort(['ООО "Ромашка"', 'Иванов И.И.', '+7 (495) 555-55-55'])}
        />
        <MapPopupItem label={'Договор залога'}
          owner_name={['22.01.2017', '22.01.2015', '0162-1-102412-И']}
          half={isTextShort(['22.01.2017', '22.01.2015', '0162-1-102412-И'])}
        />
      </div>

      <div className="verification-update-block" >
        <div className="map-popup-item-block">
          <MapPopupItem label={'Последняя проверка'}
            owner_name={['22.01.2017']}
            half={isTextShort(['22.01.2017'])}
          />
          <MapPopupItem label={'Последняя актуализация'}
            owner_name={['22.01.2017']}
            half={isTextShort(['22.01.2017'])}
          />
          <MapPopupItem label={'Плановая проверка'}
            owner_name={['22.01.2018']}
            half={isTextShort(['22.01.2018'])}
          />
          <MapPopupItem label={'Плановая актуализация'}
            owner_name={['22.01.2018']}
            half={isTextShort(['22.01.2018'])}
          />
        </div>
      </div>

      <RoundedButton style={buttonStyle} labelStyle={labelButtonStyle} label="Показать в реестре" />
      <div style={{float: 'right'}}>
        <RoundedButton style={buttonStyle} labelStyle={labelButtonStyle} label="Создать задачу" />
      </div>
    </div>
  )
};

export default ObjectContent;
