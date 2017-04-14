import React from 'react';
import { storiesOf } from '@kadira/storybook';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {theme} from '../assets/theme';

import Table from '../components/table';

import objects, {columns} from './objects-mock-data';

console.log(objects, columns);

storiesOf('Table',  Table)
    .addDecorator((story) => (
        <MuiThemeProvider muiTheme={theme}>
            {story()}
        </MuiThemeProvider>
    ))
    .add('Objects', () =>
        <div style={{height: 500, width: '100%'}}>
            <Table columns={columns}
                   data={objects}
            />
        </div>
    );



