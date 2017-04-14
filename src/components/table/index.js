import React, {Component, PropTypes} from 'react';
import {AutoSizer, MultiGrid, CellMeasurer, CellMeasurerCache} from 'react-virtualized';

import CellSwitcher, {TYPES} from './cell-switcher';

import 'react-virtualized/styles.css'

import './table.scss';

class TableComponent extends Component {
    static propTypes = {
        columns: PropTypes.array,
        data: PropTypes.array,
        rowHeight: PropTypes.oneOfType([
            PropTypes.number,
            PropTypes.string
        ])
    };
    
    static defaultProps = {
        data: [],
        columns: [],
        rowHeight: 56
    };
    
    cache = new CellMeasurerCache({
        defaultWidth: 200,
        minWidth: 44,
        fixedHeight: true
    });
    
    getCellContent = ({rowIndex, columnIndex}) => {
        const { columns, data } = this.props;
        if (rowIndex > 0 && columnIndex > 0) {
            const column = columns[columnIndex - 1];
            return {
                type: column.type,
                content: data[rowIndex - 1][column.name],
                rowIndex
            }
        } else if (rowIndex === 0 && columnIndex > 0) {
            const column = columns[columnIndex - 1];
            return {
                type: TYPES.HEADER,
                content: column.alias
            }
        } else if (rowIndex > 0 && columnIndex === 0){
            return {
                type: TYPES.CONTROL,
                content: ''
            }
        } else {
            return {
                content: ''
            }
        }
    };
    
    cellRenderer = ({rowIndex, columnIndex, style, key, parent}) => (
        <CellMeasurer cache={this.cache}
                      columnIndex={columnIndex}
                      rowIndex={rowIndex}
                      key={key}
                      parent={parent}
        >
            <CellSwitcher {...this.getCellContent({rowIndex, columnIndex})}
                          style={style}
                          key={key}
            />
        </CellMeasurer>
    );
    
    render () {
        const {columns, data, rowHeight} = this.props;

        return (
            <div className="sber-grid">
                <AutoSizer>
                    {({height, width}) => (
                        <MultiGrid
                            cellRenderer={this.cellRenderer}
                            fixedColumnCount={1}
                            fixedRowCount={1}
                            columnWidth={this.cache.columnWidth}
                            columnCount={columns.length + 1}
                            rowHeight={rowHeight}
                            rowCount={data.length + 1}
                            height={height}
                            width={width}
                            deferredMeasurementCache={this.cache}
                            overscanColumnCount={3}
                            overscanRowCount={5}
                            estimatedColumnSize={200}
                        />
                    )}
                </AutoSizer>
            </div>
        )
    }
    
    
}

export default TableComponent;