import React from 'react';
import { storiesOf } from '@kadira/storybook';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {theme} from '../assets/theme';

import Table from '../components/table/simple-table';

import objects from './objects-mock-data';
import columns from '../assets/const/attributes';

storiesOf('Table',  Table)
    .addDecorator((story) => (
        <MuiThemeProvider muiTheme={theme}>
            {story()}
        </MuiThemeProvider>
    ))
    .add('Virtual table', () =>
        <div style={{height: 500, width: '100%'}}>
            <Table columns={columns}
                   data={objects}
                   cacheKey={'key'}
            />
        </div>
    );



