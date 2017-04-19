import React, {Component, PropTypes} from 'react';
import uniq from 'lodash/uniq'

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
    
    static childContextTypes = {
        getColumnsDataDistinct: PropTypes.func
    };
    
    getChildContext() {
        return ({
            getColumnsDataDistinct: (columnName) => uniq(this.props.data.map(item => item[columnName]))
        })
    }
    
    state = {
        columnsWidth: {},
        scrollLeft: 0
    };
    
    _columnsWidth = {};
    
    getHeaderContent = (columnIndex) => {
        return {
            type: TYPES.HEADER,
            content: this.props.columns[columnIndex].alias,
            name: this.props.columns[columnIndex].name
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
    
    hiddenHeaderRenderer = columnIndex => (
        <div className="cell --hidden">
            <div style={{width: 40}}/> {/*empty div for header button size*/}
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
        if (scrollLeft !== this.state.scrollLeft) {
            this.setState(state => ({
                scrollLeft
            }));
        }
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