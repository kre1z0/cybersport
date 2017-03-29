import React, {Component} from 'react';
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
    display: 'flex',
    justifyContent: 'center',
    width: 40,
    height: 40,
    padding: 0
};

const filterIconStyle = {
    width: '14px',
    height: '10px',
    color: coolGreyTwo
};

const popoverStyle = {
    position: 'relative',
    width: '260px',
    height: '199px',
    borderRadius: '6px',
    backgroundColor: '#fff',
    boxShadow: '0 7px 15px 0 rgba(24, 25, 26, 0.22)',
    padding: '20px'
};

class PortfolioTable extends Component {

    state = {
        open: false,
        anchorEl: null
    };

    handleTouchTap = (e) => {
        e.preventDefault();

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
        const {style, title=''} = this.props;

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
                            <FilterIcon />
                        </IconButton>
                    </div>
                    <Popover
                        open={this.state.open}
                        anchorEl={this.state.anchorEl}
                        anchorOrigin={{horizontal: 'middle', vertical: 'bottom'}}
                        targetOrigin={{horizontal: 'middle', vertical: 'top'}}
                        className="portfolio-header-popover"
                        style={popoverStyle}
                        onRequestClose={this.handleRequestClose}
                    >
                        <h1>Hello!</h1>
                    </Popover>
                    <div className="title">{title}</div>
                </div>
            </TableHeaderColumn>
        );
    }
}

export default PortfolioTable;
