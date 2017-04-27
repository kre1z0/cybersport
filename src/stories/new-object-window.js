import React, {Component} from 'react';
import { storiesOf } from '@kadira/storybook';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';

import {theme} from '../assets/theme';
import ModalWindow from '../components/modal-window';
import RoundedButton from '../components/button/rounded-button';

import NewObjectWindow from '../components/new-object-window'

import {columns} from './objects-mock-data';

const Actions = (
  <div>
    <RoundedButton label="Отменить" />
    <RoundedButton label="Создать"  primary={true}/>
  </div>
);

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
        <NewObjectWindow data={columns.filter(({name}) => name !== 'control' && name !== 'address_adjusted')} />
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
