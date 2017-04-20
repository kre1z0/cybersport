import React, {Component, PropTypes} from 'react';
import classNames from 'classnames';
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
        display: 'block'
    },
    MENU: {lineHeight: '32px', minHeight: 'auto'},
    MENU_LIST: {
        paddingTop: '0px',
        paddingBottom: '0px',
        display: 'inline-block'
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
        value: PropTypes.oneOfType([
            PropTypes.number,
            PropTypes.array
        ]),
        onChange: PropTypes.func,
        multiple: PropTypes.bool,
        className: PropTypes.string
    };

    static defaultProps = {
        data: [],
        multiple: false
    };

    state = {
        focused: false
    };

    handleClick = () => {
        this.setState(state => ({
            popoverPosition: this.selectBoxRef,
            focused: !state.focused
        }));
    };

    handleClose = () => {
        this.setState({
            focused: false
        })
    };

    handleSelectItem = (event, child) => {
        const { multiple, data, value, onChange } = this.props;

        if(multiple){
            let arr = value.slice();
            const indexId = arr.indexOf(child.props.id);
            if(indexId > -1){
                arr.splice(indexId, 1);
            }
            else{
                arr.push(child.props.id)
            }

            this.setState({
                focused: true
            });

            if(onChange) onChange(data.filter(item => arr.indexOf(item.id) > -1))
        }
        else{
            this.setState({
                focused: false
            });

            if(onChange) onChange(data.filter(item => item.id === child.props.id)[0])
        }
    };

    render(){
        const { data, value, className } = this.props;
        const { focused, popoverPosition } = this.state;
        const selectedValue = this.props.multiple
            ? `Выбрано ${value.length} объекта(ов)`
            : value && data.find((elem) => elem.id === value).text;
        const mergedClassName = classNames('select-field-input', className);
        return (
            <div className={mergedClassName}>
                <div ref={(ref) => { this.selectBoxRef = ref }} onClick={this.handleClick} className={classNames('select-box', {focused})}>
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
                    <Menu
                        maxHeight={200}
                        onItemTouchTap={this.handleSelectItem}
                        onEscKeyDown={this.handleClose}
                        menuItemStyle={styles.MENU}
                        autoWidth={false}
                        width={popoverPosition && popoverPosition.clientWidth}
                        listStyle={styles.MENU_LIST}>
                        {data.map(item => {
                            const isSelected = this.props.multiple ? value.indexOf(item.id) !== -1 : value === item.id;

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