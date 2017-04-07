import React, {Component, PropTypes} from 'react';
import {AutoSizer, ScrollSync, Grid} from 'react-virtualized';
import scrollbarSize from 'dom-helpers/util/scrollbarSize';

import 'react-virtualized/styles.css'

import './table.scss';

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
        const height = 300;
        
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
                                      cellRenderer={({style, key}) => (
                                          <div className="cell"
                                               style={style}
                                               key={key}
                                          >
                                              x
                                          </div>
                                      )}
                                      width={columnWidth}
                                      height={rowHeight}
                                      rowHeight={rowHeight}
                                      columnWidth={columnWidth}
                                      rowCount={1}
                                      columnCount={1}
                                />
                            </div>
                            <div className="corner-cell"
                                 style={{
                                     position: 'absolute',
                                     left: 0,
                                     top: rowHeight
                                 }}
                            >
                                <Grid overscanColumnCount={overscanColumnCount}
                                      overscanRowCount={overscanRowCount}
                                      cellRenderer={({rowIndex, style, key}) => (
                                          <div className="cell"
                                               style={style}
                                               key={key}
                                          >
                                              {rowIndex}
                                          </div>
                                      )}
                                      columnWidth={columnWidth}
                                      columnCount={1}
                                      className="left-column-grid"
                                      height={height-scrollbarSize()}
                                      rowHeight={rowHeight}
                                      rowCount={rowCount}
                                      scrollTop={scrollTop}
                                      width={columnWidth}
                                />
                            </div>
                            <div className="column">
                                <AutoSizer disableHeight>
                                    {({width}) => (
                                        <div>
                                            <div style={{
                                                height: rowHeight,
                                                width: width
                                            }}>
                                                <Grid className="header-grid"
                                                      columnWidth={columnWidth}
                                                      columnCount={columnCount}
                                                      height={rowHeight}
                                                      overscanColumnCount={overscanColumnCount}
                                                      cellRenderer={({columnIndex, style, key}) => (
                                                          columnIndex > 0 &&
                                                          <div className="cell"
                                                               style={style}
                                                               key={key}
                                                          >
                                                              {columns[columnIndex].title}
                                                          </div>
                                                      )}
                                                      rowHeight={rowHeight}
                                                      rowCount={1}
                                                      scrollLeft={scrollLeft}
                                                      width={width}
                                                />
                                            </div>
                                            <div style={{
                                                height,
                                                width
                                            }}>
                                                <Grid className="body-grid"
                                                      columnWidth={columnWidth}
                                                      columnCount={columnCount}
                                                      height={height}
                                                      onScroll={onScroll}
                                                      overscanColumnCount={overscanColumnCount}
                                                      overscanRowCount={overscanRowCount}
                                                      cellRenderer={({rowIndex, columnIndex, style, key})=>(
                                                          columnIndex > 0 &&
                                                              <div className="cell"
                                                                   style={style}
                                                                   key={key}
                                                              >
                                                                  {data[rowIndex][columns[columnIndex].field]}
                                                              </div>
                                                          
                                                      )}
                                                      rowHeight={rowHeight}
                                                      rowCount={rowCount}
                                                      width={width}
                                                />
                                            </div>
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