import React, {Component, PropTypes} from 'react';
import {Grid, CellMeasurer} from 'react-virtualized';
import classnames from 'classnames';

class BodyGrid extends Component{
    static propTypes = {
        height: PropTypes.oneOfType([
            PropTypes.number,
            PropTypes.string
        ]).isRequired,
        
        width: PropTypes.oneOfType([
            PropTypes.number,
            PropTypes.string
        ]).isRequired,
        
        columns: PropTypes.array.isRequired,
        data: PropTypes.array.isRequired
    };
    
    renderCell = ({rowIndex, columnIndex, style, key, parent})=>(
        columnIndex > 0 &&
        <CellMeasurer cache={this.props.deferredMeasurementCache}
                      columnIndex={columnIndex}
                      rowIndex={rowIndex}
                      key={key}
                      parent={parent}
        >
            <div className={
                 classnames(
                     'cell', {'--odd': rowIndex % 2 === 0}
                 )}
                 style={style}
                 key={key}
            >
                {this.props.data[rowIndex][this.props.columns[columnIndex].field]}
            </div>
        </CellMeasurer>
    );
    
    render () {
        const {height, width, columns, data, deferredMeasurementCache, ...props} = this.props;
        return (
            <div style={{
                height,
                width
            }}>
                <Grid className="body-grid"
                      height={height}
                      width={width}
                      deferredMeasurementCache={deferredMeasurementCache}
                      columnWidth={deferredMeasurementCache.columnWidth}
                      cellRenderer={this.renderCell}
                      {...props}
                />
            </div>
        )
    }
}

export default BodyGrid;
