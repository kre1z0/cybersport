import React, {Component, PropTypes} from 'react';
import cn from 'classnames';

const noRenderStyle = {
    height: 56
};

class Body extends Component {
    static propTypes = {
        columnCount: PropTypes.number,
        rowCount: PropTypes.number,
        cellRenderer: PropTypes.func.isRequired,
        hiddenHeaderRenderer: PropTypes.func,
        onScroll: PropTypes.func,
        columnRef: PropTypes.func.isRequired
    };
    
    static defaultProps = {
        columnsCount: 0,
        rowCount: 0
    };
    
    state = {
        renderedRowsCount: 10,
        colRenderHelper: (new Array(Math.min(this.props.columnCount, 10))).fill(1),
        rowRenderHelper: (new Array(this.props.rowCount)).fill(1)
    };
    
    componentWillReceiveProps (nextProps) {
        this.setState(state => ({
            colRenderHelper: (new Array(nextProps.columnCount)).fill(1),
            rowRenderHelper: (new Array(nextProps.rowCount)).fill(1)
        }))
    }
    
    onCellClick = () => {
    
    };

    shouldComponentUpdate (nextProps) {
        return this.props.cacheKey !== nextProps.cacheKey ||
               this.props.selectedCell !== nextProps.selectedCell;
    }
    
    onColumnRef = (callback, rowIndex, columnIndex, rowRenderHelper) =>
        ref =>
            ref && rowIndex === rowRenderHelper.length-1 &&
                callback(ref, columnIndex);
    
    render () {
        const {onScroll, hiddenHeaderRenderer, cellRenderer, columnRef, onCellClick, visibility: [min, max]} = this.props;
        const {colRenderHelper, rowRenderHelper} = this.state;
        
        return (
            <div className="body-container"
                 onScroll={onScroll}
            >
                <table>
                    {hiddenHeaderRenderer &&
                    <thead>
                    <tr>
                        {colRenderHelper.map((c, columnIndex) => (
                            <th key={`th-${columnIndex}`}>
                                {
                                    hiddenHeaderRenderer(columnIndex)
                                }
                            </th>
                        ))}
                    </tr>
                    </thead>
                    }
                    <tbody>
                    {rowRenderHelper.map((r, rowIndex) => (
                        <tr key={`tr-${rowIndex}`} className={cn({'--odd': rowIndex % 2 === 0})}>
                            {rowIndex >= min && rowIndex < max
                                ? colRenderHelper.map((c, columnIndex) => (
                                    <td key={`td-${columnIndex}`}
                                        onTouchTap={() => {
                                            onCellClick && onCellClick(rowIndex, columnIndex)
                                        }}
                                        ref={this.onColumnRef(columnRef, rowIndex, columnIndex, rowRenderHelper)}
                                    >
                                        {
                                            cellRenderer(rowIndex, columnIndex)
                                        }
                                    </td>
                                    ))
                                : <td style={noRenderStyle}>No render</td>
                            }
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default Body;
