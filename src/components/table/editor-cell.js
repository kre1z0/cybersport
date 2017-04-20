import React, {Component} from 'react';
import classnames from 'classnames';

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
        const {rowIndex, content} = this.props;
        return (
            <div className={classnames(
                'cell',
                {'--odd': rowIndex % 2 === 0}
            )}
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

