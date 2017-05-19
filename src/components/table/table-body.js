import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

const noRenderStyle = {
    height: 56,
};

class Body extends Component {
    static propTypes = {
        columnCount: PropTypes.number,
        rowCount: PropTypes.number,
        cellRenderer: PropTypes.func.isRequired,
        hiddenHeaderRenderer: PropTypes.func,
        onScroll: PropTypes.func,
        columnRef: PropTypes.func.isRequired,
    };

    static defaultProps = {
        columnsCount: 0,
        rowCount: 0,
    };

    state = {
        renderedRowsCount: 10,
        colRenderHelper: new Array(this.props.columnCount).fill(1),
        rowRenderHelper: new Array(this.props.rowCount).fill(1),
    };

    componentWillReceiveProps(nextProps) {
        this.setState(state => ({
            colRenderHelper: new Array(nextProps.columnCount).fill(1),
            rowRenderHelper: new Array(nextProps.rowCount).fill(1),
        }));
    }

    onCellClick = () => {};

    shouldComponentUpdate(nextProps) {
        return (
            this.props.cacheKey !== nextProps.cacheKey ||
            this.props.visibility !== nextProps.visibility ||
            this.props.selectedCell !== nextProps.selectedCell
        );
    }

    onColumnRef = (callback, rowIndex, columnIndex, max) => ref =>
        ref && rowIndex === max && callback(ref, columnIndex);

    render() {
        const {
            onScroll,
            hiddenHeaderRenderer,
            cellRenderer,
            columnRef,
            onCellClick,
            visibility: [min, max],
            rowCount,
        } = this.props;
        const { colRenderHelper, rowRenderHelper } = this.state;

        return (
            <div className="body-container" onScroll={onScroll}>
                <table>
                    {hiddenHeaderRenderer &&
                        <thead>
                            <tr>
                                {colRenderHelper.map((c, columnIndex) => (
                                    <th key={`th-${columnIndex}`}>
                                        {hiddenHeaderRenderer(columnIndex)}
                                    </th>
                                ))}
                            </tr>
                        </thead>}
                    <tbody>
                        <tr><td style={{ height: min * 56 }} /></tr>
                        {rowRenderHelper.slice(min, max).map((r, rowIndex) => {
                            let newRowIndex = min + rowIndex;
                            return (
                                <tr
                                    key={`tr-${newRowIndex}`}
                                    className={cn({
                                        '--odd': newRowIndex % 2 === 0,
                                    })}
                                >
                                    {colRenderHelper.map((c, columnIndex) => (
                                        <td
                                            key={`td-${columnIndex}`}
                                            onTouchTap={() => {
                                                onCellClick &&
                                                    onCellClick(
                                                        newRowIndex,
                                                        columnIndex,
                                                    );
                                            }}
                                            ref={this.onColumnRef(
                                                columnRef,
                                                newRowIndex,
                                                columnIndex,
                                                max - 1,
                                            )}
                                        >
                                            {cellRenderer(
                                                newRowIndex,
                                                columnIndex,
                                            )}
                                        </td>
                                    ))}
                                </tr>
                            );
                        })}
                        <tr>
                            <td
                                style={{
                                    height: Math.max(rowCount - max, 0) * 56,
                                }}
                            />
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Body;
