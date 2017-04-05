import React, {Component, PropTypes} from 'react';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';

class TableComponent extends Component {
    static propTypes = {
        columns: PropTypes.array
    };
    
    render () {
        const {columns} = this.props;
        return (
            <Table style={{width: 'auto'}}>
                <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
                    <TableRow style={{height: '66px'}}>
                        <TableHeaderColumn/>
                        {columns.map(({id, style, title}) => (
                            <TableHeaderColumn> {title} </TableHeaderColumn>
                        ))}
                    </TableRow>
                </TableHeader>
            </Table>
        )
    }
}

export default TableComponent;