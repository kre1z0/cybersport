import React from 'react';
import { storiesOf } from '@kadira/storybook';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {theme} from '../assets/theme';

import Dropdown from '../components/dropdown';
import AutoCompleteInput from '../components/auto-complete-input';

const fields = [
    {id: 1, text: 'По возрастанию'},
    {id: 2, text: 'По убыванию'},
    {id: 3, text: 'По еще чему-нибудь'}
];

const data = [
    {id: 1, text: 'Иванов'},
    {id: 2, text: 'Петров'},
    {id: 3, text: 'Сидоров'},
    {id: 4, text: 'Иванченко'}
];

storiesOf('Inputs',  Dropdown)
    .addDecorator((story) => (
        <MuiThemeProvider muiTheme={theme}>
            {story()}
        </MuiThemeProvider>
    ))
    .add('Dropdown', () =>
        <div>
            <Dropdown type={'input'} data={data}/>
            <Dropdown type={'select'} fields={fields}/>
            <Dropdown type={'input'} data={data} cell={true}/>
            <Dropdown type={'select'} fields={fields} cell={true}/>
        </div>
    )
    .add('AutoComplete input', () =>
        <div>
            <AutoCompleteInput onChange={(e) => {console.log(e)}} data={data} />
        </div>
    );


