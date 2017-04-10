import React, {Component, PropTypes} from 'react';
import {AutoSizer, ScrollSync, Grid, ColumnSizer} from 'react-virtualized';
import scrollbarSize from 'dom-helpers/util/scrollbarSize';
import classnames from 'classnames';

import Header from './header';

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
                                          <div className={classnames(
                                              'cell', {'--odd': rowIndex % 2 === 0}
                                                )}
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
                                            <Header columns={columns}
                                                    height={rowHeight}
                                                    width={width}
                                                    columnWidth={columnWidth}
                                                    columnCount={columnCount}
                                                    overscanColumnCount={overscanColumnCount}
                                                    scrollLeft={scrollLeft}
                                            />
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
                                                              <div className={
                                                                  classnames(
                                                                        'cell', {'--odd': rowIndex % 2 === 0}
                                                                  )}
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