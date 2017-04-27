import React, {Component} from 'react';
import { storiesOf } from '@kadira/storybook';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';

import {theme} from '../assets/theme';
import ModalWindow from '../components/modal-window';
import RoundedButton from '../components/button/rounded-button';

import NewObjectWindow from '../components/new-object-window'

const Actions = (
  <div>
    <RoundedButton label="Отменить" />
    <RoundedButton label="Создать"  primary={true}/>
  </div>
);

export const attributes = [
  {name: 'object_name', alias: 'ID', type: 'text-string', isVisible: true},
  {name: 'image_name', alias: 'Фото', type: 'img', isVisible: true},
  {name: 'object_description', alias: 'Описание', type: 'text-area', isVisible: true},
  {name: 'target_segment', alias: 'Целевой клиентский сегмент', type: 'select', isVisible: true},
  {name: 'department', alias: 'ТБ', type: 'select', isVisible: true},
  {name: 'responsible_employee_name', alias: 'Ответственный сотрудник ПМЗ', type: 'select', isVisible: true},
  {name: 'address_region', alias: 'Регион расположения объекта', type: 'text', isVisible: true},
  {name: 'address_combined', alias: 'Адрес объекта (по договору)', type: 'text', isVisible: false},
  {name: 'address_adjusted', alias: 'Адрес объекта (скорректированный)', type: 'address', isVisible: true},
  {name: 'classifier1', alias: 'Вид обеспечения по классификатору (1 уровень)', type: 'select', isVisible: false},
  {name: 'classifier2', alias: 'Вид обеспечения по классификатору (2 уровень)', type: 'select', isVisible: true},
  {name: 'classifier3', alias: 'Вид обеспечения по классификатору (3 уровень)', type: 'select', isVisible: true}
];

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
        <ModalWindow title="Новый объект"
                     open={this.state.open}
                     actions={Actions}
                     onRequestClose={this.toggle}
        >
        <NewObjectWindow data={attributes} />
        </ModalWindow>
      </div>
    )
  }
}

storiesOf('NewObjectWindow', NewObjectWindow)
  .addDecorator((story) => (
    <MuiThemeProvider muiTheme={theme}>
      {story()}
    </MuiThemeProvider>
  ))
  .add('Default', () =>
    <ModalWindowContainer/>
  );
