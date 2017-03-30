import React, {Component, PropTypes} from 'react';
import {TableHeaderColumn} from 'material-ui/Table';
import Popover from 'material-ui/Popover';
import IconButton from 'material-ui/IconButton';

import Dropdown from '../dropdown';
import {FilterIcon} from '../icons';

import {darkGrey, coolGreyTwo, softGreen} from '../../assets/theme'

const columnHeaderStyle = {
    padding: '0 10px',
    verticalAlign: 'middle',
    whiteSpace: 'normal',
    fontSize: '1rem',
    lineHeight: '1.2',
    color: darkGrey
};

const iconButtonStyle = {
    display: 'flex',
    justifyContent: 'center',
    width: 40,
    height: 40,
    padding: 0
};

const filterIconStyle = {
    width: '14px',
    height: '10px'
};

const popoverStyle = {
    position: 'relative',
    width: '260px',
    borderRadius: '6px',
    backgroundColor: '#fff',
    padding: '20px',
};

class PortfolioTable extends Component {
    static propTypes = {
        style: PropTypes.object.isRequired,
        title: PropTypes.string.isRequired,
    };

    state = {
        open: false,
        anchorEl: null,
        value: 1
    };

    handleTouchTap = (e) => {
        e.preventDefault();

        console.log(e.currentTarget);

        this.setState({
            open: true,
            anchorEl: e.currentTarget,
        });
    };

    handleRequestClose = () => {
        this.setState({
            open: false,
        });
    };

    render() {
        const {style, title} = this.props;
        const {open, anchorEl} = this.state;

        const fields = [
            {id: 1, text: 'По возрастанию'},
            {id: 2, text: 'По убыванию'},
            {id: 3, text: 'По еще чему-нибудь'}
        ];

        return (
            <TableHeaderColumn style={{...columnHeaderStyle, ...style}}>
                <div className="cell-header-content">
                    <div className="icon">
                        <IconButton
                            className="header-button"
                            style={iconButtonStyle}
                            iconStyle={filterIconStyle}
                            onTouchTap={this.handleTouchTap}
                        >
                            <FilterIcon color={open ? softGreen : coolGreyTwo} />
                        </IconButton>
                    </div>
                    <Popover
                        open={open}
                        anchorEl={anchorEl}
                        anchorOrigin={{horizontal: 'middle', vertical: 'bottom'}}
                        targetOrigin={{horizontal: 'middle', vertical: 'top'}}
                        className="portfolio-header-popover"
                        style={popoverStyle}
                        zDepth={3}
                        onRequestClose={this.handleRequestClose}
                    >
                        <h3 className="popover-title">Сортировка</h3>
                        <Dropdown fields={fields} />
                    </Popover>
                    <div className="title">{title}</div>
                </div>
            </TableHeaderColumn>
        );
    }
}

export default PortfolioTable;
