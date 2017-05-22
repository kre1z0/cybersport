import React, {Component} from 'react';

import TextInput from '../text-input';

class EditorCell extends Component {
    onCellClick = () => {
        const {rowIndex, columnIndex, onCellClick} = this.props;
        onCellClick && onCellClick(rowIndex, columnIndex);
    };
    
    onCellChange = () => {
        const {rowIndex, columnIndex, onCellChange} = this.props;
        onCellChange && onCellChange(rowIndex, columnIndex);
    };
    
    render () {
        const {content} = this.props;
        return (
            <div className="cell"
                 onClick={this.onCellClick}
            >
                <TextInput style={{height: '100%'}}
                                 value={content}
                                 onChange={this.onCellChange}
                />
            </div>
        )
    }
}

export default EditorCell;

