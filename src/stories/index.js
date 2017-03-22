import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';

import Map from '../components/map';


storiesOf('map', Map)
    .add('simple', () => <Map center={[0, 0]}/>)
    .add('simple2', () => <Map center={[2, 2]}/>);
