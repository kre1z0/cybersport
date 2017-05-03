import React, {PropTypes, PureComponent} from 'react';
import IconButton from 'material-ui/IconButton';
import Popover from 'material-ui/Popover';
import FlatButton from '../button/flat-button';
import {FilterIcon} from '../icons';

import AutoComplete from '../auto-complete-input';
import SelectField from '../select-field';

import './header-popup.scss';

const iconButtonStyle = {
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

const sortTypes = [
    {id: 0, text: 'Без сортировки'},
    {id: 1, text: 'По возрастанию'},
    {id: -1, text: 'По убыванию'}
];

const setAnchor = (anchor) => () => ({anchor});
const setSortType = (sort) => () => ({sort});
const setFilter = (filter) => () => ({filter});

class HeaderPopup extends PureComponent {
    static propTypes = {
        columnName: PropTypes.string.isRequired,
        onApply: PropTypes.func
    };
    
    static contextTypes = {
        getColumnsDataDistinct: PropTypes.func
    };
    
    state = {
        anchor: null,
        sort: 0,
        filter: ''
    };
    
    showPopup = ({target}) => this.setState(setAnchor(target));
    closePopup = () => {
        const {onApply, columnName} = this.props;
        const {sort, filter} = this.state;
        
        onApply && onApply({column: columnName, sort, filter});
        this.setState(setAnchor(null));
    };
    
    reset = () => {
        const {onApply, columnName} = this.props;
        this.setState(setSortType(0));
        this.setState(setFilter(''));
        this.setState(setAnchor(null));
        onApply && onApply({column: columnName});
    };
    
    onSortTypeChange = ({id}) => this.setState(setSortType(id));
    onFilterChange = (filter) => this.setState(setFilter(filter));
    
    componentWillReceiveProps ({query}) {
        if (query && this.props.query !== query) {
            this.setState(() => ({
                sort: query.sort,
                filter: query.filter
            }));
        }
    }
    
    render () {
        const {columnName, query} = this.props;
        const {anchor, filter, sort} = this.state;
        const {getColumnsDataDistinct} = this.context;
   
        return (
            <div className="header-popup">
                <IconButton className="header-button"
                            style={iconButtonStyle}
                            iconStyle={filterIconStyle}
                            onTouchTap={this.showPopup}
                            touch={true}
                >
                    <FilterIcon isActive={!!anchor || !!query}/>
                </IconButton>
                <Popover open={!!anchor}
                         anchorEl={anchor}
                         anchorOrigin={{horizontal: 'left', vertical: 'bottom'}}
                         targetOrigin={{horizontal: 'left', vertical: 'top'}}
                         style={popoverStyle}
                         autoCloseWhenOffScreen={false}
                         canAutoPosition={false}
                         zDepth={3}
                         onRequestClose={this.closePopup}
                >
                    <div className="header-popup-content">
                        <label>Сортировка</label>
                        <SelectField data={sortTypes}
                                     value={sort}
                                     onChange={this.onSortTypeChange}
                        />
    
                        <label>Фильтр</label>
                        <AutoComplete value={filter}
                                      onChange={this.onFilterChange}
                                      data={getColumnsDataDistinct(columnName)}
                        />
                        <div className="clear-block">
                            <FlatButton onTouchTap={this.reset}
                                        secondary={true}
                                        label={'Сбросить все'}
                            />
                        </div>
                    </div>
                </Popover>
            </div>
        )
    }
    
}

export default HeaderPopup;
