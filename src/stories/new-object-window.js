import React, {Component} from 'react';
import { storiesOf } from '@kadira/storybook';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';

import {theme} from '../assets/theme';
import ModalWindow from '../components/modal-window';
import RoundedButton from '../components/rounded-button';

import NewObjectWindow from '../components/new-object-window'

const Actions = (
  <div>
    <RoundedButton label="Отменить" />
    <RoundedButton label="Создать"  primary={true}/>
  </div>
);

const attributes = [
  {name: 'object_name', alias: 'ID', type: 'text-string'},
  {name: 'image_name', alias: 'Фото', type: 'img'},
  {name: 'object_description', alias: 'Описание', type: 'text-area'},
  {name: 'target_segment', alias: 'Целевой клиентский сегмент', type: 'select'},
  {name: 'department', alias: 'ТБ', type: 'select'},
  {name: 'responsible_employee_name', alias: 'Ответственный сотрудник ПМЗ', type: 'select'},
  {name: 'address_region', alias: 'Регион расположения объекта', type: 'text'},
  {name: 'address_combined', alias: 'Адрес объекта (по договору)', type: 'text'},
  {name: 'address_adjusted', alias: 'Адрес объекта (скорректированный)', type: 'address'},
  {name: 'classifier1', alias: 'Вид обеспечения по классификатору (1 уровень)', type: 'select'},
  {name: 'classifier2', alias: 'Вид обеспечения по классификатору (2 уровень)', type: 'select'},
  {name: 'classifier3', alias: 'Вид обеспечения по классификатору (3 уровень)', type: 'select'}
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
