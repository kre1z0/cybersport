import React, {Component} from 'react';
import {storiesOf} from '@kadira/storybook';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';

import {theme} from '../assets/theme';
import ModalWindow from '../components/modal-window';

import ObjectPhoto from '../components/object-photo'

const attr = [
  {name: 'object_name', alias: 'ID', type: 'text'},
  {name: 'department', alias: 'ТБ', type: 'text', editorType: 'select', isEditable: true},
  {name: 'classifier2', alias: 'Вид обеспечения по классификатору (2 уровень)', type: 'text',  editorType: 'select', isEditable: true},
  {name: 'classifier3', alias: 'Вид обеспечения по классификатору (3 уровень)', type: 'text',  editorType: 'select', isEditable: true},
  {name: 'address_region', alias: 'Регион расположения объекта', type: 'text', editorType: 'text', isEditable: true},
  {name: 'object_description', alias: 'Описание', type: 'text', editorType: 'text-area', isEditable: true},
  {name: 'target_segment', alias: 'Целевой клиентский сегмент', type: 'text', editorType: 'select', isEditable: true},
  {name: 'responsible_employee_name', alias: 'Ответственный сотрудник ПМЗ', type: 'text', editorType: 'select', isEditable: true},
  {name: 'address_combined', alias: 'Адрес объекта (по договору)', type: 'text', editorType: 'text', isEditable: true},
  {name: 'address_adjusted', alias: 'Адрес объекта (скорректированный)', type: 'address', editorType: 'address', isEditable: true},
  {name: 'classifier1', alias: 'Вид обеспечения по классификатору (1 уровень)', type: 'text',  editorType: 'select', isEditable: true},
];

const object = {
  gid: 1,
  image_name: 'http://dpchas.com.ua/sites/default/files/u85/sber.jpg;http://www.sberbank.ru/portalserver/content/atom/contentRepository/content/gamarnika4.jpg?id=7e09e8c2-b2f8-4105-9168-7019b5a92931;http://image.zn.ua/media/images/original/Mar2017/170335.jpeg;https://static.life.ru/posts/2017/04/1002145/gr/north/c13d7a6145a9d7d86ecc0c1277a1891f__1440x.jpg;http://interesnoe.info/pictures/art/1205792555-p1.jpg;https://unikassa.ru/wp-content/uploads/images/11277.jpg;http://image.zn.ua/media/images/original/Mar2017/170338.jpg',
  object_name: '0003',
  department: 'Волго-Вятский банк',
  target_segment: 'Сегмент 3',
  object_description: 'Торговый центр площадью 2500 м2',
  owner_name: 'Залогодатель 1',
  owner_inn: '1000000001',
  contract_no: '85120119/1_ДИ',
  contract_start_date: '2012-12-29T00:00:00+04:00',
  contract_end_date: '2018-07-20T00:00:00+03:00',
  object_quality_category: 'Основное',
  actual_quality_category: '',
  classifier1: 'Недвижимость',
  classifier2: 'Коммерческая недвижимость',
  classifier3: 'Офисные здания и помещения',
  classifier4: 'Офисы класса C',
  cadastr_no: '16:50:080115:30',
  building_type: 'Встроенное помещение',
  wall_material: 'Кирпич',
  construction_year: '1964',
  red_line_position: 'Нет',
  separate_entrance: 'Да',
  area: 10042,
  floor_no: 'Здание целиком',
  floor_qty: 2,
  room_qty: null,
  monthly_volume: null,
  has_store: '',
  petrol_station_qty: null,
  address_region: 'Республика Татарстан',
  address_town: 'г. Казань',
  address_details: 'ул. Техническая, д. 21',
  address_combined: 'Россия, Республика Татарстан, г. Казань, ул. Техническая, д. 21',
  address_adjusted: '',
  liquidity: 'Низкая',
  actual_liquidity: '',
  value_type: 'Рыночная',
  original_full_value: 252900000,
  original_mortgage_value: 151740000,
  actual_full_value: 252900000,
  actual_mortgage_value: 151740000,
  last_check_date: '2016-07-25T00:00:00+03:00',
  last_actualization_date: '2016-10-23T00:00:00+03:00',
  check_interval: 180,
  actualization_interval: null,
  check_time: null,
  contacts: '',
  credit_inspector: '',
  responsible_employee_name: 'Сотрудник 95',
  responsible_employee_id: null,
  check_result_code: '1.1./9./10.'
};


class ModalWindowContainer extends Component {
  state = {
    open: false
  };

  toggle = () => {
    this.setState(({open}) => ({open: !open}));
  };

  render () {
    return (
      <div>
        <RaisedButton onTouchTap={this.toggle}
                      label="Open window"
        />
        <ModalWindow
                     bodyStyle={{
                       padding: 0,
                       display: 'table',
                       height: '100%'
                     }}
                     open={this.state.open}
                     onRequestClose={this.toggle}
        >
          <ObjectPhoto attr={attr} object={object}/>
        </ModalWindow>
      </div>
    )
  }
}

storiesOf('ObjectPhoto', ObjectPhoto)
  .addDecorator((story) => (
    <MuiThemeProvider muiTheme={theme}>
      {story()}
    </MuiThemeProvider>
  ))
  .add('Default', () =>
    <ModalWindowContainer/>
  );