import React from 'react';
import { storiesOf } from '@kadira/storybook';

import Map from '../components/map';

storiesOf('Map', module)
    .addDecorator((story) => (
        <div style={{height: 768}}>
            {story()}
        </div>
    ))
    .add('Moscow', () =>
        <Map center={[4191452.3430594765, 7499156.532455107]} resolution={152.87405657031263}/>
    )
    .add('Murmansk district', () =>
        <Map center={[4021431.7092360086, 10384072.151689371]} resolution={1222.992452562501}/>
    );
