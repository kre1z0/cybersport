import React, {Component, PropTypes} from 'react';
import MenuItem from 'material-ui/MenuItem';

import {DropdownIcon} from '../icons';

import {darkGrey, coolGreyTwo, softGreen} from '../../assets/theme'
import './Dropdown.scss';

const innerDivStyle = {
    padding: '0 10px'
};

const dropdownIconStyle = {
    width: '7px',
    height: '4px',
    color: coolGreyTwo
};

class Dropdown extends Component {
    static propTypes = {
        type: PropTypes.string.isRequired,
        cell: PropTypes.bool,
        fields: PropTypes.array,
        data: PropTypes.array
    };

    static defaultProps = {
        cell: false,
        fields: null
    };

    state = {
        open: false,
        selected: this.props.fields ? this.props.fields[0] : null,
        value: '',
        selectedValue: null,
        filtered: []
    };



    componentWillUpdate(nextProps, nextState) {
        if (nextState.open) {
            document.addEventListener('click', this.handleMenuClose);
        } else {
            document.removeEventListener('click', this.handleMenuClose);
        }
    }

    handleMenuClose = (e) => {
        const {classList} = e.target;

        if (classList.contains('dropdown-select')
            || classList.contains('dropdown-input')
            || classList.contains('dropdown-text')
            || classList.contains('dropdown-icon')
            || classList.contains('dropdown-icon-content')
            || classList.contains('dropdown-polygon')) {return;}

        this.setState({
            open: false
        });
    };

    handleMenuSet = () => {
        this.setState({
            open: !this.state.open
        });
    };

    handleFieldSelect = (id) => {
        this.setState({
            selected: this.props.fields.filter(field => field.id === id)[0],
        })
    };

    handleItemSelect = (id) => {
        this.setState({
            value: this.props.data.filter(item => item.id === id)[0].text
        });
    };

    handleInputChange = (e) => {
        const {value} = e.target;
        const {data} = this.props;
        const filtered = data.filter(item => item.text.toLowerCase().includes(value.toLowerCase()));

        value
            ? this.setState({open: true, value, filtered})
            : this.setState({open: false, value, filtered: []});
    };

    render() {
        const {open, selected, value, filtered} = this.state;
        const {type, cell, fields} = this.props;

        return (
            <div className={`dropdown ${open ? 'open' : ''} ${cell ? 'cell' : ''}`}>
                {type === 'select' ?
                    <div>
                        <div className='dropdown-select' onTouchTap={this.handleMenuSet}>
                            <div className="dropdown-text">{selected.text}</div>
                            <div className="dropdown-icon">
                                <DropdownIcon className="dropdown-icon-content" style={dropdownIconStyle} />
                            </div>
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
                            className='dropdown-input'
                            value={value}
                            onChange={this.handleInputChange}
                        />
                        <div className='menu'>
                            {filtered.map(({id, text}) =>
                                <MenuItem
                                    key={id}
                                    className='menu-item'
                                    style={{color:darkGrey}}
                                    innerDivStyle={innerDivStyle}
                                    primaryText={text}
                                    onTouchTap={() => this.handleItemSelect(id)}
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
