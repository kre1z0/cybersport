import React from 'react';
import classnames from 'classnames';
import IconButton from 'material-ui/IconButton';
import {ContextIcon} from '../icons';

const iconStyle = {
    height: 13,
    width: 13
};

const ControlCell = ({rowIndex, columnIndex, style, key, content}) => (
    <div className={
        classnames(
            'cell',
            'control',
            {'--odd': rowIndex % 2 === 0}
        )}
         style={style}
         key={key}
    >
        <IconButton iconStyle={iconStyle}
                    touch={true}
        >
            <ContextIcon />
        </IconButton>
    </div>
);

export default ControlCell;

