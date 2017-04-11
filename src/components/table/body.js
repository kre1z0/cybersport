import React, {Component, PropTypes} from 'react';
import {Grid} from 'react-virtualized';
import classnames from 'classnames';

class BodyGrid extends Component{
    static propTypes = {
        height: PropTypes.oneOfType([
            PropTypes.number,
            PropTypes.string
        ]).isRequired,
        
        width: PropTypes.oneOfType([
            PropTypes.number,
            PropTypes.string
        ]).isRequired,
        
        columns: PropTypes.array.isRequired,
        data: PropTypes.array.isRequired
    };
    
    renderCell = ({rowIndex, columnIndex, style, key})=>(
        columnIndex > 0 &&
        <div className={
             classnames(
                 'cell', {'--odd': rowIndex % 2 === 0}
             )}
             style={style}
             key={key}
        >
            {this.props.data[rowIndex][this.props.columns[columnIndex].field]}
        </div>

    );
    
    render () {
        const {height, width, columns, data, ...props} = this.props;
        return (
            <div style={{
                height,
                width
            }}>
                <Grid className="body-grid"
                      height={height}
                      width={width}
                      cellRenderer={this.renderCell}
                      {...props}
                />
            </div>
        )
    }
}

export default BodyGrid;
