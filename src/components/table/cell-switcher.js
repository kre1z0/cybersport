import React from 'react';
import HeaderCell from './header-cell';
import TextCell from './text-cell';
import ImageCell from './img-cell';
import ControlCell from './control-cell';
import EditorCell from './editor-cell';
import AddressCell from './address-cell';

import moment from 'moment';
import numeral from 'numeral';
import ru from 'numeral/locales/ru';

moment.locale('ru');
numeral.locale('ru');

export const TYPES = {
    HEADER: 'header',
    TEXT: 'text',
    IMG: 'img',
    CONTROL: 'control',
    EDITOR: 'editor',
    ADDRESS: 'address',
    DATE: 'date',
    NUMBER: 'number'
};

const CellSwitcher = ({type, onCellClick, onCellChange, ...props}) => {
    switch (type) {
        case TYPES.HEADER: return <HeaderCell {...props}/>;
        case TYPES.TEXT: return <TextCell {...props}/>;
        case TYPES.IMG: return <ImageCell {...props}/>;
        case TYPES.CONTROL: return <ControlCell {...props}/>;
        case TYPES.ADDRESS: return <AddressCell {...props}/>;
        case TYPES.DATE: {
            const content = props.content ? moment(props.content).format('L') : '';
            return <TextCell {...props}
                             content={content}
            />;
        }
        case TYPES.EDITOR: return <EditorCell {...props}
                                              onBlur={onCellChange}
                                  />;
        case TYPES.NUMBER: {
            const content = props.content ? numeral(props.content).format('0,0') : '';
            return <TextCell {...props}
                             content={content}
            />;
        }
        default: return <TextCell {...props}/>;
    }
};

export default CellSwitcher;
