import React, {Component, PropTypes} from 'react';
import {AutoSizer, ScrollSync, Grid, ColumnSizer} from 'react-virtualized';
import scrollbarSize from 'dom-helpers/util/scrollbarSize';
import classnames from 'classnames';

import Header from './header';
import Body from './body';
import ControlColumn from './control-column';

import 'react-virtualized/styles.css'

import './table.scss';

const CornerCell = ({style, key}) => (
    <div className="cell"
         style={style}
         key={key}
    >
    </div>
);

class TableComponent extends Component {
    static propTypes = {
        columns: PropTypes.array,
        data: PropTypes.array,
    };
    
    static defaultProps = {
        data: []
    };
    
    render () {
        const {columns, data} = this.props;
        
        const columnWidth = 150;
        const rowHeight = 56;
        const overscanColumnCount = 0;
        const overscanRowCount = 5;
        const rowCount = data.length;
        const columnCount = columns.length;
        const height = 400;
        
        return (
            <div className="sber-grid">
                <ScrollSync>
                    {({clientHeight, clientWidth, onScroll, scrollHeight, scrollLeft, scrollTop, scrollWidth}) => (
                        <div className="row">
                            <div className="corner-cell"
                                 style={{
                                     position: 'absolute',
                                     left: 0,
                                     top: 0,
                                 }}
                            >
                                <Grid className="header-grid"
                                      cellRenderer={(props) => <CornerCell {...props}/>}
                                      width={columnWidth}
                                      height={rowHeight}
                                      rowHeight={rowHeight}
                                      columnWidth={columnWidth}
                                      rowCount={1}
                                      columnCount={1}
                                />
                            </div>
                            <ControlColumn data={data}
                                           height={height}
                                           width={columnWidth}
                                           rowHeight={rowHeight}
                                           rowCount={rowCount}
                                           overscanColumnCount={overscanColumnCount}
                                           overscanRowCount={overscanRowCount}
                                           scrollTop={scrollTop}
                            />
                            <div className="column">
                                <AutoSizer disableHeight>
                                    {({width}) => (
                                        <div>
                                            <Header columns={columns}
                                                    height={rowHeight}
                                                    width={width}
                                                    columnWidth={columnWidth}
                                                    columnCount={columnCount}
                                                    overscanColumnCount={overscanColumnCount}
                                                    scrollLeft={scrollLeft}
                                            />
                                            <Body data={data}
                                                  columns={columns}
                                                  height={height}
                                                  width={width}
                                                  onScroll={onScroll}
                                                  columnWidth={columnWidth}
                                                  columnCount={columnCount}
                                                  rowHeight={rowHeight}
                                                  rowCount={rowCount}
                                                  overscanColumnCount={overscanColumnCount}
                                                  overscanRowCount={overscanRowCount}
                                            />
                                        </div>
                                    )}
                                </AutoSizer>
                            </div>
                        </div>
                    )
                    }
                </ScrollSync>
            </div>
        )
    }
}

export default TableComponent;