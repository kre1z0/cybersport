import React from 'react';
import {TableHeaderColumn} from 'material-ui/Table';
import Popover from 'material-ui/Popover';
import IconButton from 'material-ui/IconButton';

import {FilterIcon} from '../icons';

import {darkGrey, coolGreyTwo} from '../../assets/theme'

const columnHeaderStyle = {
    padding: '0 10px',
    verticalAlign: 'middle',
    whiteSpace: 'normal',
    fontSize: '1rem',
    lineHeight: '1.2',
    color: darkGrey
};

const iconButtonStyle = {
    width: 40,
    height: 40,
    padding: 0
};

const filterIconStyle = {
    width: '14px',
    height: '10px',
    color: coolGreyTwo
};

const PortfolioTable = ({style, title=''}) => (

    <TableHeaderColumn style={{...columnHeaderStyle, ...style}}>
        <div className="cell-content">
            <div className="filter-icon">
                <IconButton style={iconButtonStyle} iconStyle={filterIconStyle}><FilterIcon /></IconButton>
            </div>
            <div className="title">{title}</div>
        </div>
    </TableHeaderColumn>

);

export default PortfolioTable;
