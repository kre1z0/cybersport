import React, {Component, PropTypes} from 'react';
import Popover from 'material-ui/Popover';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import CheckIcon from '../icons/check';

import {darkGrey, coolGreyTwo, softGreen} from '../../assets/theme'

import {DropdownIcon} from '../icons';

import './SelectField.scss';

const styles = {
    ARROW: {
        width: '7px',
        height: '4px',
        color: coolGreyTwo
    },
    POPOVER: {
        width: '100%'
    },
    MENU: {lineHeight: '32px', minHeight: 'auto'},
    MENU_LIST: {
        paddingTop: '0px',
        paddingBottom: '0px',
        display: 'inline-block',
        width: '100%'
    },
    MENU_ITEM: (selected) => ({
        color: selected ? softGreen : 'inherit',
        fontSize: '1rem'
    }),
    MENU_ITEM_ICON: {
        margin: 0,
        textAlign: 'center',
        top: '3px',
        width: '25px',
        height: '13px'
    }
};

class SelectFieldInput extends Component {
    static propTypes = {
        data: PropTypes.arrayOf(PropTypes.shape({
            text: PropTypes.string,
            id: PropTypes.number
        })),
        selectedId: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.array
        ]),
        onChange: PropTypes.func,
        multiple: PropTypes.bool
    };

    defaultProps = {
        data: [],
        multiple: false
    };

    state = {
        focused: false,
        selectedValue: this.props.multiple ? `Выбрано ${this.props.selectedId.length} объекта(ов)` : this.props.data.reduce((val, el) => el.id === this.props.selectedId ? el.text : val, ''),
        selectedId: this.props.multiple ? this.props.selectedId : [].concat(this.props.selectedId)
    };

    handleClick = (e) => {
        this.setState({
            focused: !this.state.focused,
            popoverPosition: e.currentTarget
        })
    };

    handleClose = () => {
        this.setState({
            focused: false
        })
    };

    handleSelectItem = (event, child) => {
        if(this.props.multiple){
            let arr = this.state.selectedId.slice();
            console.log(arr);
            const indexId = arr.indexOf(child.props.id);
            if(indexId > -1){
                arr.splice(indexId, 1);
            }
            else{
                arr.push(child.props.id)
            }

            this.setState({
                selectedId: arr,
                selectedValue: `Выбрано ${arr.length} объекта(ов)`,
                focused: true
            });
        }
        else{
            this.setState({
                selectedId: [].concat(child.props.id),
                selectedValue: child.props.primaryText,
                focused: false
            });
        }


        if(this.props.onChange) this.props.onChange(child.props.id)
    };

    render(){
        const { data } = this.props;
        const { focused, popoverPosition, selectedValue, selectedId } = this.state;
        return (
            <div className="select-field-input">
                <div onClick={this.handleClick} className={`select-box ${focused ? 'focused' : ''}`}>
                    <span className="text">{selectedValue}</span>
                    <div className="arrow">
                        <DropdownIcon style={styles.ARROW} className="icon-content" />
                    </div>
                </div>
                <Popover
                    open={focused}
                    anchorEl={popoverPosition}
                    anchorOrigin={{horizontal: 'left', vertical: 'bottom'}}
                    targetOrigin={{horizontal: 'left', vertical: 'top'}}
                    onRequestClose={this.handleClose}
                    style={styles.POPOVER}
                >
                    <Menu onItemTouchTap={this.handleSelectItem} onEscKeyDown={this.handleClose} menuItemStyle={styles.MENU} autoWidth={false} listStyle={styles.MENU_LIST}>
                        {data.map(item => {
                            const isSelected = selectedId.indexOf(item.id) !== -1;

                            return this.props.multiple
                                    ? <MenuItem
                                        innerDivStyle={{paddingLeft: '35px'}}
                                        leftIcon={isSelected ? <div style={styles.MENU_ITEM_ICON}><CheckIcon style={{width: '100%', height: '100%'}} /></div> : null}
                                        style={styles.MENU_ITEM(isSelected)}
                                        primaryText={item.text}
                                        id={item.id}
                                        key={item.id} />
                                    : <MenuItem
                                        style={styles.MENU_ITEM(isSelected)}
                                        primaryText={item.text}
                                        id={item.id}
                                        key={item.id}/>
                        }

                        )}
                    </Menu>
                </Popover>
            </div>
        )
    }
}

export default SelectFieldInput