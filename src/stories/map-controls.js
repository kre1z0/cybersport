import React from 'react';
import { storiesOf } from '@kadira/storybook';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { theme } from '../assets/theme';
import MapControl from '../components/map-controls';
import LayersList from '../components/map-controls/layers-list';
import ObjectFilter from '../components/map-controls/objects-filter';
import MapMode from '../components/map-controls/map-mode';
import MapControlButton from '../components/map-controls/map-control-button';
import {
    BasemapsIcon,
    MapSearch,
    MapLayers,
    MapPlus,
    MapMinus,
} from '../components/icons';

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
    .add('MapMode', () => <MapMode />)
    .add('MapControlButtons', () => (
        <div style={{ padding: 50, backgroundColor: '#fff' }}>
            <span style={{ padding: 10 }}>
                <MapControlButton icon={<BasemapsIcon isActive={false} />} />
            </span>
            <span style={{ padding: 10 }}>
                <MapControlButton icon={<BasemapsIcon isActive={true} />} />
            </span>
            <span style={{ padding: 10 }}>
                <MapControlButton icon={<MapSearch />} />
            </span>
            <span style={{ padding: 10 }}>
                <MapControlButton icon={<MapLayers />} />
            </span>
            <span style={{ padding: 10 }}>
                <MapControlButton icon={<MapLayers isActive={true} />} />
            </span>
            <span style={{ padding: 10 }}>
                <MapControlButton icon={<MapPlus />} />
            </span>
            <span style={{ padding: 10 }}>
                <MapControlButton icon={<MapMinus />} />
            </span>
        </div>
    ));
