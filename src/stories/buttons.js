import React from 'react';
import { storiesOf } from '@kadira/storybook';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {theme} from '../assets/theme';

import RoundedButton from '../components/rounded-button';

storiesOf('Buttons', module)
    .addDecorator((story) => (
        <MuiThemeProvider muiTheme={theme}>
            {story()}
        </MuiThemeProvider>
    ))
    .add('Rounded', () =>
        <div>
            <RoundedButton label="default" />
            <RoundedButton label="primary" primary={true}/>
        </div>
    );

