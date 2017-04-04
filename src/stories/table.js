import React from 'react';
import { storiesOf } from '@kadira/storybook';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {theme} from '../assets/theme';

import Table from '../components/portfolio-table';

const columns = [
    {id: 1, title: 'ID'},
    {id: 2, title: 'Фото'},
    {id: 3, title: 'Описание'},
    {id: 4, title: 'Целевой клиентский сегмент'},
    {id: 5, title: 'ТБ'},
    {id: 6, title: 'Ответственный сотрудник ПМЗ'},
    {id: 7, title: 'Регион расположения объекта'},
    {id: 8, title: 'Адрес объекта (по договору)'},
    {id: 9, title: 'Адрес объекта (скореректированный)'},
    {id: 10, title: 'Вид обеспечения по классификатору (1 уровень)'},
    {id: 11, title: 'Вид обеспечения по классификатору (2 уровень)'},
    {id: 12, title: 'Вид обеспечения по классификатору (3 уровень)'}
];

storiesOf('Table',  Table)
    .addDecorator((story) => (
        <MuiThemeProvider muiTheme={theme}>
            {story()}
        </MuiThemeProvider>
    ))
    .add('default', () =>
        <Table columns={columns}/>
    );



