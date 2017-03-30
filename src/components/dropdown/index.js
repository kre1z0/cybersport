import React, {Component, PropTypes} from 'react';
import MenuItem from 'material-ui/MenuItem';

import {DropdownIcon} from '../icons';

import {darkGrey, coolGreyTwo, softGreen} from '../../assets/theme'
import './Dropdown.css';

const innerDivStyle = {
    padding: '0 10px'
};

class Dropdown extends Component {
    static propTypes = {
        type: PropTypes.string.isRequired,
        fields: PropTypes.array
    };

    state = {
        open: false,
        selected: this.props.fields[0]
    };

    handleMenuOpen = () => {
        this.setState({
            open: !this.state.open
        })
    };

    handleFieldSelect = (id) => {
        this.setState({
            selected: this.props.fields.filter(field => field.id === id)[0],
            open: false
        })
    };

    render() {
        const {open, selected} = this.state;
        const {type, fields} = this.props;

        return (
            <div className={`dropdown ${open ? 'open' : ''}`}>
                {type === 'select' ?
                    <div>
                        <div className='select' onTouchTap={this.handleMenuOpen}>
                            <div className="text">{selected.text}</div>
                            <div className="icon"><DropdownIcon style={{width: '7px', height: '4px', color: coolGreyTwo}} /></div>
                        </div>
                        <div className='menu'>
                            {fields.map(({id, text}) =>
                                <MenuItem
                                    key={id}
                                    className='menu-item'
                                    style={{color: selected.id === id ? softGreen : darkGrey}}
                                    innerDivStyle={innerDivStyle}
                                    primaryText={text}
                                    onTouchTap={() => this.handleFieldSelect(id)}
                                />
                            )}
                        </div>
                    </div>
                    :
                    <div>
                        <input
                            type="text"
                            className='input'
                            onChange={this.handleMenuOpen}
                        />
                        <div className='menu'>
                            {fields.map(({id, text}) =>
                                <MenuItem
                                    key={id}
                                    className='menu-item'
                                    style={{color: selected.id === id ? softGreen : darkGrey}}
                                    innerDivStyle={innerDivStyle}
                                    primaryText={text}
                                    onTouchTap={() => this.handleFieldSelect(id)}
                                />
                            )}
                        </div>
                    </div>
                }


            </div>
        );
    }
}

export default Dropdown;
