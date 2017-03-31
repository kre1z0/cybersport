import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {theme} from '../assets/theme';

import ImageLoader from '../components/img-loader';

storiesOf('ImageLoader', ImageLoader)
    .addDecorator((story) => (
        <MuiThemeProvider muiTheme={theme}>
            {story()}
        </MuiThemeProvider>
    ))
    .add('Default', () =>
        <ImageLoader/>
    );
