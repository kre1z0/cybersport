import React, {Component} from 'react';
import { storiesOf } from '@kadira/storybook';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';

import {theme} from '../assets/theme';
import ModalWindow from '../components/modal-window';

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
                <RaisedButton onTouchTap={this.toggle} label="Open dialog"/>
                <ModalWindow open={this.state.open} onRequestClose={this.toggle}>
                    Content
                </ModalWindow>
            </div>
        )
    }
}

storiesOf('ModalWindow', Map)
    .addDecorator((story) => (
        <MuiThemeProvider muiTheme={theme}>
            {story()}
        </MuiThemeProvider>
    ))
    .add('Default', () =>
        <ModalWindowContainer/>
    );

