import React, {Component, PropTypes} from 'react';
import uniq from 'lodash/uniq'

import CellSwitcher, {TYPES} from './cell-switcher';
import Body from './table-body';
import Header from './table-header';

import './simple-table.scss';

const selectCell = (rowIndex, columnIndex) => () => ({selectedCell: [rowIndex, columnIndex]});

class TableComponent extends Component {
    static propTypes = {
        columns: PropTypes.array.isRequired,
        data: PropTypes.array.isRequired,
        rowHeight: PropTypes.oneOfType([
            PropTypes.number,
            PropTypes.string
        ])
    };
    
    static defaultProps = {
        rowHeight: 56
    };
    
    static childContextTypes = {
        getColumnsDataDistinct: PropTypes.func
    };
    
    getChildContext() {
        return ({
            getColumnsDataDistinct: (columnName) => uniq(
                this.props.data
                    .filter(item => item[columnName])
                    .map(item => item[columnName])
            )
        })
    }
    
    state = {
        selectedCell: null,
        columnsWidth: {},
        scrollLeft: 0,
        isEdit: false
    };
    
    _columnsWidth = {};
    
    getHeaderContent = (columnIndex) => {
        const {onFilterChange, query} = this.props;
        const column = this.props.columns[columnIndex];
        return {
            type: TYPES.HEADER,
            popup: column.type !== TYPES.CONTROL && column.filterable,
            content: column.alias,
            name: column.name,
            onApply: onFilterChange,
            query: query[column.name]
        };
    };
    
    getCellContent = (rowIndex, columnIndex) => {
        const {columns, data} = this.props;
        const {selectedCell, isEdit} = this.state;
        const isSelected = selectedCell && selectedCell[0] === rowIndex && selectedCell[1] === columnIndex;
        
        const {name, type, isEditable} = columns[columnIndex];
        return {
            type: isSelected && isEditable && isEdit ? TYPES.EDITOR : type,
            content: data[rowIndex][name]
        };
    };
    
    bodyCellRenderer = (rowIndex, columnIndex) => {
        return (
            <CellSwitcher {...this.getCellContent(rowIndex, columnIndex)}
                          onCellChange={this.onCellChange}
                          rowIndex={rowIndex}
                          columnIndex={columnIndex}
            />
        )
    };
    
    hiddenHeaderRenderer = columnIndex => {
        const {popup, content } = this.getHeaderContent(columnIndex);
        return (
            <div className="cell --hidden">
                {popup && <div style={{width: 40}}/> /*empty div for header button size*/}
                {content}
            </div>
        )
    };
    
    headerRenderer = columnIndex => (
        <CellSwitcher {...this.getHeaderContent(columnIndex)}
                      style={{width: this.state.columnsWidth[columnIndex]}}
        />
    );
    
    onCellClick = (rowIndex, columnIndex) => {
        this.setState(selectCell(rowIndex, columnIndex));
    };
    
    onCellChange = (rowIndex, columnIndex, value) => {
        console.log(rowIndex, columnIndex, value);
    };
    
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
    
    componentWillReceiveProps ({cacheKey}) {
        if (cacheKey !== this.props.cacheKey) {
            this._columnsWidth = {};
        }
    }
    
    
    render () {
        const {columns, data, cacheKey, loader} = this.props;
        const {scrollLeft, selectedCell} = this.state;
        
        return (
            <div className="sber-grid">
                <Header scrollLeft={scrollLeft}
                        columnCount={columns.length}
                        cellRenderer={this.headerRenderer}
    
                />
                {loader ||
                    <Body columnCount={columns.length}
                          rowCount={data.length}
                          columnRef={this.onColumnRef}
                          onScroll={this.onBodyScroll}
                          onCellClick={this.onCellClick}
                          cellRenderer={this.bodyCellRenderer}
                          hiddenHeaderRenderer={this.hiddenHeaderRenderer}
                          cacheKey={cacheKey}
                          selectedCell={selectedCell}
                    />
                }
            </div>
        )
    }
    
    
}

export default TableComponent;