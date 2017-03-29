import React from 'react';
import {TableHeaderColumn} from 'material-ui/Table';

import {FilterIcon} from '../icons';

import {darkGrey, coolGreyTwo} from '../../assets/theme'

const columnHeaderStyle = {
    padding: '0 10px',
    verticalAlign: 'middle',
    whiteSpace: 'normal',
    fontSize: '1rem',
    color: darkGrey
};

const filterIconStyle = {
    width: '14px',
    height: '10px',
    color: coolGreyTwo,
    marginRight: '10px'
};

const PortfolioTable = ({style, title=''}) => (

    <TableHeaderColumn style={{...columnHeaderStyle, ...style}}>
        <div className="cell-content">
            <div className="filter-icon"><FilterIcon style={filterIconStyle} /></div><div className="title">{title}</div>
        </div>
    </TableHeaderColumn>

);

export default PortfolioTable;
