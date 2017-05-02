import React, {Component} from 'react';
import {storiesOf} from '@kadira/storybook';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';

import {theme} from '../assets/theme';
import ModalWindow from '../components/modal-window';

import ObjectAddress from '../components/object-address'

const attr = [
  {name: 'object_description', alias: 'Описание', type: 'text', isEditable: true},
  {name: 'object_name', alias: 'ID', type: 'text'},
  {name: 'address_combined', alias: 'Адрес объекта (по договору)', type: 'text', isEditable: true}
];

const object =  {
  object_name: '000003',
  object_description: 'Торговый центр площадью 2500 м2',
  address_combined: 'Россия, Республика Татарстан, г. Казань, ул. Техническая, д. 21',
};

class ModalWindowContainer extends Component {
  state = {
    open: false
  };

  toggle = () => {
    this.setState(({open}) => ({open: !open}));
  };

  render() {
    return (
      <div>
        <RaisedButton onTouchTap={this.toggle}
                      label="Open window"
        />
        <ModalWindow open={this.state.open}
                     onRequestClose={this.toggle}
        >
          <ObjectAddress attr={attr}
                         object={object}
          />
        </ModalWindow>
      </div>
    )
  }
}

storiesOf('ObjectAddress', ObjectAddress)
  .addDecorator((story) => (
    <MuiThemeProvider muiTheme={theme}>
      {story()}
    </MuiThemeProvider>
  ))
  .add('Default', () =>
    <ModalWindowContainer/>
  );
