import React, {Component, PropTypes} from 'react';
import {AutoSizer, ScrollSync, CellMeasurerCache} from 'react-virtualized';

import Header from './header';
import Body from './body';
import ControlColumn from './control-column';
import Corner from './corner';

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
    
    cache = new CellMeasurerCache({
        defaultWidth: 44,
        minWidth: 44,
        fixedHeight: true
    });
    
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
                            <Corner height={rowHeight}
                                    width={44}
                            />
                            <ControlColumn data={data}
                                           height={height}
                                           width={44}
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
                                                    deferredMeasurementCache={this.cache}
                                                    columnCount={columnCount}
                                                    overscanColumnCount={overscanColumnCount}
                                                    scrollLeft={scrollLeft}
                                            />
                                            <Body data={data}
                                                  columns={columns}
                                                  height={height}
                                                  width={width}
                                                  onScroll={onScroll}
                                                  deferredMeasurementCache={this.cache}
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
                    )}
                </ScrollSync>
            </div>
        )
    }
    
    
}

export default TableComponent;