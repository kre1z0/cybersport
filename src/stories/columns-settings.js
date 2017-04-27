import React, {Component} from 'react';
import { storiesOf } from '@kadira/storybook';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';

import {theme} from '../assets/theme';
import ModalWindow from '../components/modal-window';
import RoundedButton from '../components/button/rounded-button';

import {attributes} from './new-object-window'
import ColumnsSettings from '../components/columns-settings'

const Actions = (
  <div>
    <RoundedButton label="Отменить" />
    <RoundedButton label="Сохранить"  primary={true}/>
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
        <ModalWindow title="Настройки реестра"
                     open={this.state.open}
                     actions={Actions}
                     onRequestClose={this.toggle}
        >
          <ColumnsSettings data={attributes} />
        </ModalWindow>
      </div>
    )
  }
}

storiesOf('ColumnsSettings', ColumnsSettings)
  .addDecorator((story) => (
    <MuiThemeProvider muiTheme={theme}>
      {story()}
    </MuiThemeProvider>
  ))
  .add('Default', () =>
    <ModalWindowContainer/>
  );
