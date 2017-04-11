import React, {Component, PropTypes} from 'react';
import {Grid, CellMeasurer} from 'react-virtualized';
import IconButton from 'material-ui/IconButton';
import {FilterIcon} from '../icons';
import {coolGreyTwo} from '../../assets/theme';

const iconButtonStyle = {
    display: 'flex',
    justifyContent: 'center',
    width: 40,
    height: 40,
    padding: 0
};

const filterIconStyle = {
    width: '14px',
    height: '10px'
};

class HeaderGrid extends Component {
    static propTypes = {
        height: PropTypes.oneOfType([
            PropTypes.number,
            PropTypes.string
        ]).isRequired,
        
        width: PropTypes.oneOfType([
            PropTypes.number,
            PropTypes.string
        ]).isRequired,
        
        columns: PropTypes.array.isRequired
    };
    
    renderCell = ({columnIndex, style, key, parent, rowIndex}) => (
        columnIndex > 0 &&
        <CellMeasurer cache={this.props.deferredMeasurementCache}
                      columnIndex={columnIndex}
                      rowIndex={rowIndex}
                      key={key}
                      parent={parent}
        >
            <div className="cell header"
                 style={style}
                 key={key}
            >
                <IconButton className="header-button"
                            style={iconButtonStyle}
                            iconStyle={filterIconStyle}
                            onTouchTap={this.handleTouchTap}
                >
                    <FilterIcon color={coolGreyTwo}/>
                </IconButton>
                <div className="header-title">
                    {this.props.columns[columnIndex].title}
                </div>
            </div>
        </CellMeasurer>
    );
    
    render () {
        const {height, width, columns, deferredMeasurementCache, ...props} = this.props;
        return (
            <div style={{
                height,
                width
            }}>
                <Grid className="header-grid"
                      height={height}
                      width={width}
                      cellRenderer={this.renderCell}
                      rowHeight={height}
                      columnWidth={deferredMeasurementCache.columnWidth}
                      deferredMeasurementCache={deferredMeasurementCache}
                      rowCount={1}
                      {...props}
                />
            </div>
        )
    }
}

export default HeaderGrid;
