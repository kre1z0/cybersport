import React, {Component} from 'react';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import Avatar from 'material-ui/Avatar';

import PortfolioHeaderColumn from './PortfolioHeaderColumn';
import {ContextIcon, PinIcon} from '../icons';

import {coolGreyTwo, steel} from '../../assets/theme'
import './PortfolioTable.css';

const columnStyle = {
    padding: '0 10px',
    verticalAlign: 'middle',
    whiteSpace: 'normal',
    fontSize: '1rem',
    lineHeight: '1.2',
    color: steel
};

const contextIconStyle = {
    width: '3px',
    height: '13px',
    color: coolGreyTwo
};

const avatarStyle = {
    position: 'relative',
    top: '2px',
    width: '46px',
    height: '46px',
    backgroundColor: '#fff'
};

const pinIconStyle = {
    position: 'relative',
    top: '-1px',
    width: '13px',
    height: '16px',
    color: coolGreyTwo,
    marginRight: '10px'
};

const columnWidths = [
    {minWidth: '43px', maxWidth: '43px'},
    {minWidth: '100px', maxWidth: '100px'},
    {minWidth: '105px', maxWidth: '105px'},
    {minWidth: '176px', maxWidth: '176px'},
    {minWidth: '212px', maxWidth: '212px'},
    {minWidth: '220px', maxWidth: '220px'},
    {minWidth: '260px', maxWidth: '260px'},
    {minWidth: '303px', maxWidth: '303px'},
];

const headerColumns = [
    {id: 1, style: columnWidths[1], title: 'ID'},
    {id: 2, style: columnWidths[2], title: 'Фото'},
    {id: 3, style: columnWidths[7], title: 'Описание'},
    {id: 4, style: columnWidths[4], title: 'Целевой клиентский сегмент'},
    {id: 5, style: columnWidths[3], title: 'ТБ'},
    {id: 6, style: columnWidths[5], title: 'Ответственный сотрудник ПМЗ'},
    {id: 7, style: columnWidths[5], title: 'Регион расположения объекта'},
    {id: 8, style: columnWidths[7], title: 'Адрес объекта (по договору)'},
    {id: 9, style: columnWidths[7], title: 'Адрес объекта (скореректированный)'},
    {id: 10, style: columnWidths[6], title: 'Вид обеспечения по классификатору (1 уровень)'},
    {id: 11, style: columnWidths[6], title: 'Вид обеспечения по классификатору (2 уровень)'},
    {id: 12, style: columnWidths[6], title: 'Вид обеспечения по классификатору (3 уровень)'}
];

class PortfolioTable extends Component {

    render() {
        const {objects} = this.props;

        return (
            <div className="portfolio-table">

                <Table style={{width: 'auto'}}>

                    <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
                        <TableRow style={{height: '66px'}}>
                            <TableHeaderColumn style={{...columnWidths[0], ...columnStyle}} />
                            {headerColumns.map(({id, style, title}) => (
                                <PortfolioHeaderColumn key={id} {...{style, title}} />
                            ))}
                        </TableRow>
                    </TableHeader>

                    <TableBody displayRowCheckbox={false} style={{width: 'auto'}} className="table-body">
                        {objects.map(object => (
                            <TableRow key={object.id} style={{height: '58px'}}>

                                <TableRowColumn style={{...columnStyle, ...columnWidths[0], textAlign: 'center', paddingTop: '1px'}}>
                                    <ContextIcon style={contextIconStyle} />
                                </TableRowColumn>

                                <TableRowColumn style={{...columnStyle, ...columnWidths[1]}}>{object.id}</TableRowColumn>

                                <TableRowColumn style={{...columnStyle, ...columnWidths[2]}}>
                                    <Avatar style={avatarStyle} src={object.photo} />
                                </TableRowColumn>

                                <TableRowColumn style={{...columnStyle, ...columnWidths[7]}}>{object.description}</TableRowColumn>

                                <TableRowColumn style={{...columnStyle, ...columnWidths[4]}}>{object.segment}</TableRowColumn>

                                <TableRowColumn style={{...columnStyle, ...columnWidths[3]}}>{object.tb}</TableRowColumn>

                                <TableRowColumn style={{...columnStyle, ...columnWidths[5]}}>{object.response}</TableRowColumn>

                                <TableRowColumn style={{...columnStyle, ...columnWidths[5]}}>{object.region}</TableRowColumn>

                                <TableRowColumn style={{...columnStyle, ...columnWidths[7]}}>
                                    <div className="cell-content">
                                        <div className="icon" style={{alignSelf: 'flex-start'}}><PinIcon style={pinIconStyle} /></div>
                                        <div className="title">{object.address_doc}</div>
                                    </div>
                                </TableRowColumn>

                                <TableRowColumn style={{...columnStyle, ...columnWidths[7]}}>
                                    <div className="cell-content">
                                        <div className="pin-icon" style={{alignSelf: 'flex-start'}}><PinIcon style={pinIconStyle} /></div>
                                        <div className="title">{object.address_edit}</div>
                                    </div>
                                </TableRowColumn>

                                <TableRowColumn style={{...columnStyle, ...columnWidths[6]}}>{object.type_one}</TableRowColumn>

                                <TableRowColumn style={{...columnStyle, ...columnWidths[6]}}>{object.type_two}</TableRowColumn>

                                <TableRowColumn style={{...columnStyle, ...columnWidths[6]}}>{object.type_three}</TableRowColumn>

                            </TableRow>
                        ))}
                    </TableBody>

                </Table>

            </div>
        );
    }

}

export default PortfolioTable;
