import React from 'react';
import { storiesOf } from '@kadira/storybook';
import { theme } from '../assets/theme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import MapPopups from '../components/map-popup'
import OfficeContent from '../components/map-popup/office-content'
import HomeContent from '../components/map-popup/home-content'
import ObjectContent from '../components/map-popup/object-content'

storiesOf('MapPopups', MapPopups)
  .addDecorator((story) => (
    <MuiThemeProvider muiTheme={theme} >
      {story()}
    </MuiThemeProvider>
  ))
  .add('Office', () => {
      return (
        <div style={{ margin: 100 }} >
          <MapPopups  >
            <OfficeContent />
          </MapPopups>
        </div>
      );
    }
    ).add('Home', () => {
    return (
      <div style={{ margin: 100 }} >
        <MapPopups  >
          <HomeContent />
        </MapPopups>
      </div>
    );
  }
).add('Object', () => {
    return (
      <div style={{ margin: 100 }} >
        <MapPopups  >
          <ObjectContent />
        </MapPopups>
      </div>
    );
  }
)


