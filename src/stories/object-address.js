import React, { Component } from 'react';
import { storiesOf } from '@kadira/storybook';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';

import RoundedButton from '../components/button/rounded-button';
import { theme } from '../assets/theme';
import ModalWindow from '../components/modal-window';

import ObjectAddress from '../components/object-address';

const attrDefault = [
    {
        name: 'object_description',
        alias: 'Описание',
        type: 'text',
        isEditable: true,
    },
    { name: 'object_name', alias: 'ID', type: 'text' },
    {
        name: 'address_combined',
        alias: 'Адрес объекта (по договору)',
        type: 'text',
        isEditable: true,
    },
];

const attrEdit = [
    {
        name: 'object_description',
        alias: 'Описание',
        type: 'text',
        isEditable: true,
    },
    { name: 'object_name', alias: 'ID', type: 'text' },
    {
        name: 'address_adjusted',
        alias: 'Адрес объекта (скорректированный)',
        type: 'address',
        editorType: 'address',
        isEditable: true,
    },
];

const object = {
    object_name: '000003',
    object_description: 'Торговый центр площадью 2500 м2',
    address_combined: 'г. Королев ул. Ленина, д1, кор.1',
    address_adjusted: 'г. Королев ул. Ленина, д1, кор.1',
};

const Actions = (
    <div>
        <RoundedButton
            labelStyle={{ textTransform: 'capitalize' }}
            label="Отменить"
        />
        <RoundedButton
            labelStyle={{ textTransform: 'capitalize' }}
            label="Сохранить"
            primary={true}
        />
    </div>
);

storiesOf('ObjectAddress', ObjectAddress)
    .addDecorator(story => (
        <MuiThemeProvider muiTheme={theme}>
            {story()}
        </MuiThemeProvider>
    ))
    .add('Default', () => {
        class ModalWindowContainer extends Component {
            state = {
                open: false,
            };

            toggle = () => {
                this.setState(({ open }) => ({ open: !open }));
            };

            render() {
                return (
                    <div>
                        <RaisedButton
                            onTouchTap={this.toggle}
                            label="Open window"
                        />
                        <ModalWindow
                            open={this.state.open}
                            onRequestClose={this.toggle}
                        >
                            <ObjectAddress attr={attrDefault} object={object} />
                        </ModalWindow>
                    </div>
                );
            }
        }
        return <ModalWindowContainer />;
    })
    .add('Object address edit', () => {
        class ModalWindowContainer extends Component {
            state = {
                open: false,
            };

            toggle = () => {
                this.setState(({ open }) => ({ open: !open }));
            };

            render() {
                return (
                    <div>
                        <RaisedButton
                            onTouchTap={this.toggle}
                            label="Open window"
                        />
                        <ModalWindow
                            open={this.state.open}
                            actions={Actions}
                            onRequestClose={this.toggle}
                        >
                            <ObjectAddress attr={attrEdit} object={object} />
                        </ModalWindow>
                    </div>
                );
            }
        }
        return <ModalWindowContainer />;
    });
