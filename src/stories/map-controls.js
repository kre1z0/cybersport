import React from 'react';
import { storiesOf } from '@kadira/storybook';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import { theme } from '../assets/theme';
import MapControl from '../components/map-controls';
import LayersList from '../components/map-controls/layers-list';
import ObjectFilter from '../components/map-controls/objects-filter';
import MapMode from '../components/map-controls/map-mode';

storiesOf('MapControls', [LayersList, ObjectFilter])
    .addDecorator(story => (
        <MuiThemeProvider muiTheme={theme}>
            {story()}
        </MuiThemeProvider>
    ))
    .add('LayersList', () => (
        <MapControl>
            <LayersList />
        </MapControl>
    ))
    .add('ObjectFilter', () => (
        <MapControl>
            <ObjectFilter />
        </MapControl>
    ))
    .add('MapMode', () => <MapMode />);
