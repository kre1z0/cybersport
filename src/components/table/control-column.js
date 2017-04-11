import React, {Component, PropTypes} from 'react';
import {Grid} from 'react-virtualized';
import classnames from 'classnames';
import scrollbarSize from 'dom-helpers/util/scrollbarSize';

class ControlColumn extends Component {
    static propTypes = {
        height: PropTypes.oneOfType([
            PropTypes.number,
            PropTypes.string
        ]).isRequired,
    
        width: PropTypes.oneOfType([
            PropTypes.number,
            PropTypes.string
        ]).isRequired,
        
        rowHeight: PropTypes.oneOfType([
            PropTypes.number,
            PropTypes.string
        ]).isRequired,
    
        data: PropTypes.array.isRequired
    };
    
    renderCell = ({rowIndex, style, key}) => (
        <div className={classnames(
            'cell', {'--odd': rowIndex % 2 === 0}
        )}
             style={style}
             key={key}
        >
            {rowIndex}
        </div>
    );
    
    render () {
        const {height, width, rowHeight, data, ...props} = this.props;
        
        return (
            <div className="corner-cell"
                 style={{
                     position: 'absolute',
                     left: 0,
                     top: rowHeight
                 }}
            >
                <Grid className="left-column-grid"
                      height={height - scrollbarSize()}
                      width={width}
                      rowHeight={rowHeight}
                      columnCount={1}
                      columnWidth={width}
                      cellRenderer={this.renderCell}
                      {...props}
                />
            </div>
        )
    }
}

export default ControlColumn;
