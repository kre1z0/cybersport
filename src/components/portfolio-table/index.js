import React, {Component} from 'react';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';

import {FilterIcon, ContextIcon} from '../icons';

import {darkGrey, coolGreyTwo, steel} from '../../assets/theme'
import './PortfolioTable.css';

const columnStyle = {
    padding: '0 10px',
    verticalAlign: 'middle',
    whiteSpace: 'normal',
    fontSize: '1rem',
    color: steel
};

const columnHeaderStyle = {
    ...columnStyle,
    color: darkGrey
};

const filterIconStyle = {
    width: '14px',
    height: '10px',
    color: coolGreyTwo,
    marginRight: '10px'
};

const contextIconStyle = {
    width: '3px',
    height: '13px',
    color: coolGreyTwo
};

class PortfolioTable extends Component {

    render() {
        const {objects} = this.props;

        return (
            <div className="portfolio-table">

                <Table style={{width: 'auto'}}>

                    <TableHeader
                        displaySelectAll={false}
                        adjustForCheckbox={false}
                    >
                        <TableRow style={{height: '66px'}}>
                            <TableHeaderColumn style={{...columnHeaderStyle, minWidth: '43px', maxWidth: '43px'}} />
                            <TableHeaderColumn style={{...columnHeaderStyle, minWidth: '60px', maxWidth: '60px'}}>
                                <div className="cell-content">
                                    <div className="filter-icon"><FilterIcon style={filterIconStyle} /></div><div className="title">ID</div>
                                </div>
                            </TableHeaderColumn>
                            <TableHeaderColumn style={{...columnHeaderStyle, minWidth: '60px', maxWidth: '60px'}}>
                                <div className="cell-content">
                                    <div className="filter-icon"><FilterIcon style={filterIconStyle} /></div><div className="title">Фото</div>
                                </div>
                            </TableHeaderColumn>
                            <TableHeaderColumn style={{...columnHeaderStyle, minWidth: '303px', maxWidth: '303px'}}>
                                <div className="cell-content">
                                    <div className="filter-icon"><FilterIcon style={filterIconStyle} /></div><div className="title">Описание</div>
                                </div>
                            </TableHeaderColumn>
                            <TableHeaderColumn style={{...columnHeaderStyle, minWidth: '303px', maxWidth: '303px'}}>
                                <div className="cell-content">
                                    <div className="filter-icon"><FilterIcon style={filterIconStyle} /></div><div className="title">Целевой клиентский сегмент</div>
                                </div>
                            </TableHeaderColumn>
                            <TableHeaderColumn style={{...columnHeaderStyle, minWidth: '303px', maxWidth: '303px'}}>
                                <div className="cell-content">
                                    <div className="filter-icon"><FilterIcon style={filterIconStyle} /></div><div className="title">ТБ</div>
                                </div>
                            </TableHeaderColumn>
                            <TableHeaderColumn style={{...columnHeaderStyle, minWidth: '303px', maxWidth: '303px'}}>
                                <div className="cell-content">
                                    <div className="filter-icon"><FilterIcon style={filterIconStyle} /></div><div className="title">Ответственный сотрудник ПМЗ</div>
                                </div>
                            </TableHeaderColumn>
                            <TableHeaderColumn style={{...columnHeaderStyle, minWidth: '303px', maxWidth: '303px'}}>
                                <div className="cell-content">
                                    <div className="filter-icon"><FilterIcon style={filterIconStyle} /></div><div className="title">Регион расположения объекта</div>
                                </div>
                            </TableHeaderColumn>
                            <TableHeaderColumn style={{...columnHeaderStyle, minWidth: '303px', maxWidth: '303px'}}>
                                <div className="cell-content">
                                    <div className="filter-icon"><FilterIcon style={filterIconStyle} /></div><div className="title">Адрес объекта (по договору)</div>
                                </div>
                            </TableHeaderColumn>
                            <TableHeaderColumn style={{...columnHeaderStyle, minWidth: '303px', maxWidth: '303px'}}>
                                <div className="cell-content">
                                    <div className="filter-icon"><FilterIcon style={filterIconStyle} /></div><div className="title">Адрес объекта (скореректированный)</div>
                                </div>
                            </TableHeaderColumn>
                            <TableHeaderColumn style={{...columnHeaderStyle, minWidth: '303px', maxWidth: '303px'}}>
                                <div className="cell-content">
                                    <div className="filter-icon"><FilterIcon style={filterIconStyle} /></div><div className="title">Вид обеспечения по классификатору (1 уровень)</div>
                                </div>
                            </TableHeaderColumn>
                            <TableHeaderColumn style={{...columnHeaderStyle, minWidth: '303px', maxWidth: '303px'}}>
                                <div className="cell-content">
                                    <div className="filter-icon"><FilterIcon style={filterIconStyle} /></div><div className="title">Вид обеспечения по классификатору (2 уровень)</div>
                                </div>
                            </TableHeaderColumn>
                            <TableHeaderColumn style={{...columnHeaderStyle, minWidth: '303px', maxWidth: '303px'}}>
                                <div className="cell-content">
                                    <div className="filter-icon"><FilterIcon style={filterIconStyle} /></div><div className="title">Вид обеспечения по классификатору (3 уровень)</div>
                                </div>
                            </TableHeaderColumn>
                        </TableRow>
                    </TableHeader>

                    <TableBody displayRowCheckbox={false} style={{width: 'auto'}} className="table-body">
                        <TableRow style={{height: '58px'}}>
                            <TableRowColumn style={{...columnStyle, minWidth: '43px', maxWidth: '43px', textAlign: 'center', paddingTop: '1px'}}><ContextIcon style={contextIconStyle} /></TableRowColumn>
                            <TableRowColumn style={{...columnStyle, minWidth: '60px', maxWidth: '60px'}}>1</TableRowColumn>
                            <TableRowColumn style={{...columnStyle, minWidth: '60px', maxWidth: '60px'}}>1</TableRowColumn>
                            <TableRowColumn style={{...columnStyle, minWidth: '303px', maxWidth: '303px'}}>1</TableRowColumn>
                            <TableRowColumn style={{...columnStyle, minWidth: '303px', maxWidth: '303px'}}>1</TableRowColumn>
                            <TableRowColumn style={{...columnStyle, minWidth: '303px', maxWidth: '303px'}}>1</TableRowColumn>
                            <TableRowColumn style={{...columnStyle, minWidth: '303px', maxWidth: '303px'}}>1</TableRowColumn>
                            <TableRowColumn style={{...columnStyle, minWidth: '303px', maxWidth: '303px'}}>1</TableRowColumn>
                            <TableRowColumn style={{...columnStyle, minWidth: '303px', maxWidth: '303px'}}>1</TableRowColumn>
                            <TableRowColumn style={{...columnStyle, minWidth: '303px', maxWidth: '303px'}}>1</TableRowColumn>
                            <TableRowColumn style={{...columnStyle, minWidth: '303px', maxWidth: '303px'}}>1</TableRowColumn>
                            <TableRowColumn style={{...columnStyle, minWidth: '303px', maxWidth: '303px'}}>1</TableRowColumn>
                            <TableRowColumn style={{...columnStyle, minWidth: '303px', maxWidth: '303px'}}>1</TableRowColumn>
                        </TableRow>
                        <TableRow style={{height: '58px'}}>
                            <TableRowColumn style={{...columnStyle, minWidth: '43px', maxWidth: '43px', textAlign: 'center', paddingTop: '1px'}}><ContextIcon style={contextIconStyle} /></TableRowColumn>
                            <TableRowColumn style={{...columnStyle, minWidth: '60px', maxWidth: '60px'}}>1</TableRowColumn>
                            <TableRowColumn style={{...columnStyle, minWidth: '60px', maxWidth: '60px'}}>1</TableRowColumn>
                            <TableRowColumn style={{...columnStyle, minWidth: '303px', maxWidth: '303px'}}>1</TableRowColumn>
                            <TableRowColumn style={{...columnStyle, minWidth: '303px', maxWidth: '303px'}}>1</TableRowColumn>
                            <TableRowColumn style={{...columnStyle, minWidth: '303px', maxWidth: '303px'}}>1</TableRowColumn>
                            <TableRowColumn style={{...columnStyle, minWidth: '303px', maxWidth: '303px'}}>1</TableRowColumn>
                            <TableRowColumn style={{...columnStyle, minWidth: '303px', maxWidth: '303px'}}>1</TableRowColumn>
                            <TableRowColumn style={{...columnStyle, minWidth: '303px', maxWidth: '303px'}}>1</TableRowColumn>
                            <TableRowColumn style={{...columnStyle, minWidth: '303px', maxWidth: '303px'}}>1</TableRowColumn>
                            <TableRowColumn style={{...columnStyle, minWidth: '303px', maxWidth: '303px'}}>1</TableRowColumn>
                            <TableRowColumn style={{...columnStyle, minWidth: '303px', maxWidth: '303px'}}>1</TableRowColumn>
                            <TableRowColumn style={{...columnStyle, minWidth: '303px', maxWidth: '303px'}}>1</TableRowColumn>
                        </TableRow>
                    </TableBody>

                </Table>

            </div>
        );
    }

}

export default PortfolioTable;
