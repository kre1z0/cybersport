import React, {Component} from 'react';
import { storiesOf } from '@kadira/storybook';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';

import {theme} from '../assets/theme';
import ModalWindow from '../components/modal-window';
import RoundedButton from '../components/button/rounded-button';

import bigText from './big-text-mock';

const Actions = (
    <div>
        <RoundedButton label="Button1" />
        <RoundedButton label="Button2"  primary={true}/>
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
                <ModalWindow title="Window Title"
                             open={this.state.open}
                             actions={Actions}
                             onRequestClose={this.toggle}
                >
                    {bigText}
                </ModalWindow>
            </div>
        )
    }
}

storiesOf('ModalWindow', ModalWindow)
    .addDecorator((story) => (
        <MuiThemeProvider muiTheme={theme}>
            {story()}
        </MuiThemeProvider>
    ))
    .add('Default', () =>
        <ModalWindowContainer/>
    );

