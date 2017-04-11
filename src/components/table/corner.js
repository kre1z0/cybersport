import React from 'react';
import {Grid} from 'react-virtualized';

const CornerCell = ({style, key}) => (
    <div className="cell"
         style={style}
         key={key}
    >
    </div>
);

const CornerGrid = ({height, width, ...props}) => (
    <div className="corner-cell"
         style={{
             position: 'absolute',
             left: 0,
             top: 0,
         }}
    >
        <Grid className="header-grid"
              cellRenderer={(props) => <CornerCell {...props}/>}
              width={width}
              height={height}
              rowHeight={height}
              columnWidth={width}
              rowCount={1}
              columnCount={1}
              {...props}
        />
    </div>
);

export default CornerGrid;
