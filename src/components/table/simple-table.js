import React, {Component, PropTypes} from 'react';

import CellSwitcher, {TYPES} from './cell-switcher';
import Body from './table-body';
import Header from './table-header';

import './simple-table.scss';

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
    
    state = {
        columnsWidth: {},
        scrollLeft: 0
    };
    
    _columnsWidth = {};
    
    
    getHeaderContent = (columnIndex) => {
        return {
            type: TYPES.HEADER,
            content: this.props.columns[columnIndex].alias
        };
    };
    
    getCellContent = (rowIndex, columnIndex) => {
        const {columns, data} = this.props;
        const column = columns[columnIndex];
        return {
            type: column.type,
            content: data[rowIndex][column.name]
        };
    };
    
    bodyCellRenderer = (rowIndex, columnIndex) => (
        <CellSwitcher {...this.getCellContent(rowIndex, columnIndex)}/>
    );
    
    hiddenHeaderRenderer = columnIndex => ( //empty div for header button size
        <div className="cell --hidden">
            <div style={{width: 40}}/>
            {this.getHeaderContent(columnIndex).content}
        </div>
    );
    
    headerRenderer = columnIndex => (
        <CellSwitcher {...this.getHeaderContent(columnIndex)}
                      style={{width: this.state.columnsWidth[columnIndex]}}
        />
    );
    
    onColumnRef = (ref, columnIndex) => {
        if (columnIndex in this._columnsWidth) return;

        this._columnsWidth[columnIndex] = ref.offsetWidth;
        
        if (Object.keys(this._columnsWidth).length === this.props.columns.length) {
            this.setState(state => ({
                columnsWidth: this._columnsWidth
            }));
        }
    };
    
    onBodyScroll = ({target}) => {
        const scrollLeft = target.scrollLeft;
        this.setState(state => ({
            scrollLeft
        }));
    };
    
    
    render () {
        const {columns, data} = this.props;
        const { scrollLeft} = this.state;
        
        return (
            <div className="sber-grid">
                <Header scrollLeft={scrollLeft}
                        columnCount={columns.length}
                        cellRenderer={this.headerRenderer}
    
                />
                <Body columnCount={columns.length}
                      rowCount={data.length}
                      columnRef={this.onColumnRef}
                      onScroll={this.onBodyScroll}
                      cellRenderer={this.bodyCellRenderer}
                      hiddenHeaderRenderer={this.hiddenHeaderRenderer}
                />
            </div>
        )
    }
    
    
}

export default TableComponent;