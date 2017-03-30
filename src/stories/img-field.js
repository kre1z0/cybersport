import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {theme} from '../assets/theme';

import {LoadedImgButton, AddImgButton} from '../components/img-field';

storiesOf('Load img', [LoadedImgButton, AddImgButton])
    .addDecorator((story) => (
        <MuiThemeProvider muiTheme={theme}>
            {story()}
        </MuiThemeProvider>
    ))
    .add('Buttons', () =>
        <div>
            <LoadedImgButton onTouchTap={action('delImage')}
                             src="https://pp.userapi.com/c410329/v410329137/30a5/qWaaK7FUrog.jpg"
            />
            <AddImgButton onTouchTap={action('addImage')}/>
        </div>
    );
