import React from 'react';
import { storiesOf } from '@kadira/storybook';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {theme} from '../assets/theme';

import Dropdown from '../components/dropdown';
import AutoCompleteInput from '../components/auto-complete-input';
import DatePicker from '../components/date-picker';
import SelectFieldInput from '../components/select-field';

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
    .add('AutoComplete input', () =>
        <div>
            <AutoCompleteInput onChange={(e) => {console.log(e)}} data={data} />
            <AutoCompleteInput value="Ива" data={data} />
        </div>
    )
    .add('SelectInput input', () =>
        <div>
            <SelectFieldInput data={data} selectedId={1} />
            <br />
            <SelectFieldInput multiple data={data} selectedId={[1,2,3]} />
        </div>
    )
    .add('DatePicker input', () =>
        <div>
            <DatePicker />
            <DatePicker onChange={(date) => { console.log(date)}} />
            <DatePicker value={new Date(2017, 6, 5)} />
        </div>
    );


