import React from 'react';
import { storiesOf } from '@kadira/storybook';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {theme} from '../assets/theme';

import Table from '../components/table';

import objects, {columns, columnWidths} from './objects-mock-data';

storiesOf('Table',  Table)
    .addDecorator((story) => (
        <MuiThemeProvider muiTheme={theme}>
            {story()}
        </MuiThemeProvider>
    ))
    .add('with header', () =>
        <Table columns={columns}
               data={objects}/>
    )
    .add('without header', () =>
        <Table data={objects}/>
    );



