import React, { Component } from 'react';
import PropTypes from 'prop-types';
import uniq from 'lodash/uniq';

import CellSwitcher, { TYPES } from './cell-switcher';
import Body from './table-body';
import Header from './table-header';

import './simple-table.scss';

const selectCell = (rowIndex, columnIndex) => () => ({
    selectedCell: [rowIndex, columnIndex],
});

class TableComponent extends Component {
    static propTypes = {
        columns: PropTypes.array.isRequired,
        data: PropTypes.array.isRequired,
        rowHeight: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
        onImageClick: PropTypes.func,
        onCellClick: PropTypes.func,
    };

    static defaultProps = {
        rowHeight: 56,
        query: {},
        cacheKey: Math.random().toString(36),
    };

    static childContextTypes = {
        getColumnsDataDistinct: PropTypes.func,
    };

    getChildContext() {
        return {
            getColumnsDataDistinct: columnName => {
                if (columnName === 'gid') return [];

                const column = this.props.columns.find(
                    ({ name }) => name === columnName,
                );
                const { domains } = this.props;

                if (!column) {
                    return [];
                } else if (domains && column in domains) {
                    return domains[column];
                } else {
                    return uniq(
                        this.props.data
                            .filter(item => item[columnName])
                            .map(item => `${item[columnName]}`),
                    );
                }
            },
        };
    }

    state = {
        selectedCell: null,
        columnsWidth: {},
        scrollLeft: 0,
        isEdit: false,
        visibility: [0, 20],
    };

    _columnsWidth = {};

    getHeaderContent = columnIndex => {
        const { onFilterChange, query } = this.props;
        const column = this.props.columns[columnIndex];
        return {
            type: TYPES.HEADER,
            popup: column.type !== TYPES.CONTROL && column.type !== TYPES.IMG,
            content: column.alias,
            name: column.name,
            filterable: column.filterable,
            onApply: onFilterChange,
            query: query[column.name],
        };
    };

    getCellContent = (rowIndex, columnIndex) => {
        const { columns, data, getImages, onRemove } = this.props;
        const { selectedCell, isEdit } = this.state;
        const isSelected =
            selectedCell &&
            selectedCell[0] === rowIndex &&
            selectedCell[1] === columnIndex;

        const { name, type, isEditable } = columns[columnIndex];
        const images = type === TYPES.IMG
            ? getImages(data[rowIndex][name])
            : null;
        return {
            rowIndex,
            type: isSelected && isEditable && isEdit ? TYPES.EDITOR : type,
            content: images ? images[0] : data[rowIndex][name],
            onRemove: TYPES.CONTROL === type ? onRemove : null,
            className: name.slice(0, -1) === 'classifier' ? 'classifier' : null,
        };
    };

    bodyCellRenderer = (rowIndex, columnIndex) => {
        return (
            <CellSwitcher
                {...this.getCellContent(rowIndex, columnIndex)}
                onCellChange={this.onCellChange}
                rowIndex={rowIndex}
                columnIndex={columnIndex}
            />
        );
    };

    hiddenHeaderRenderer = columnIndex => {
        const { popup, content } = this.getHeaderContent(columnIndex);
        return (
            <div className="cell hidden">
                {popup &&
                    <div
                        style={{ width: 40 }}
                    /> /*empty div for header button size*/}
                {content}
            </div>
        );
    };

    headerRenderer = columnIndex => (
        <CellSwitcher
            {...this.getHeaderContent(columnIndex)}
            style={{ width: this.state.columnsWidth[columnIndex] }}
        />
    );

    onCellClick = (rowIndex, columnIndex) => {
        const { columns, data, onImageClick } = this.props;
        if (columns[columnIndex].type === TYPES.IMG) {
            onImageClick && onImageClick(data[rowIndex]);
        }
        this.setState(selectCell(rowIndex, columnIndex));
    };

    onCellChange = (rowIndex, columnIndex, value) => {
        console.log(rowIndex, columnIndex, value);
    };

    onColumnRef = (ref, columnIndex) => {
        setTimeout(() => {
            if (
                this._columnsWidth[columnIndex] === ref.offsetWidth ||
                ref.offsetWidth === 0
            )
                return;

            this._columnsWidth[columnIndex] = ref.offsetWidth;

            if (
                Object.keys(this._columnsWidth).length ===
                this.props.columns.length
            ) {
                this.setState(state => ({
                    columnsWidth: this._columnsWidth,
                }));
            }
        }, 100);
    };

    onBodyScroll = ({ target }) => {
        const scrollLeft = target.scrollLeft;
        const scrolledRows = Math.max(0, Math.round(target.scrollTop / 56) - 1);
        if (scrollLeft !== this.state.scrollLeft) {
            this.setState(state => ({
                scrollLeft,
            }));
        }
        if (scrolledRows !== this.state.visibility[0]) {
            this.setState({
                visibility: [scrolledRows, scrolledRows + 20],
            });
        }
    };

    componentWillReceiveProps({ cacheKey }) {
        if (cacheKey !== this.props.cacheKey) {
            this._columnsWidth = {};
        }
    }

    render() {
        const { columns, data, cacheKey, loader } = this.props;
        const { scrollLeft, selectedCell, visibility } = this.state;

        return (
            <div className="sber-grid">
                <Header
                    scrollLeft={scrollLeft}
                    columnCount={columns.length}
                    cellRenderer={this.headerRenderer}
                />
                <Body
                    columnCount={columns.length}
                    rowCount={data.length}
                    columnRef={this.onColumnRef}
                    onScroll={this.onBodyScroll}
                    onCellClick={this.onCellClick}
                    cellRenderer={this.bodyCellRenderer}
                    hiddenHeaderRenderer={this.hiddenHeaderRenderer}
                    cacheKey={cacheKey}
                    selectedCell={selectedCell}
                    visibility={visibility}
                />
                {loader}
            </div>
        );
    }
}

export default TableComponent;
