import React from 'react';
import IconButton from 'material-ui/IconButton';
import {FilterIcon} from '../icons';
import {coolGreyTwo} from '../../assets/theme';

const iconButtonStyle = {
    width: 40,
    height: 40,
    padding: 0
};

const filterIconStyle = {
    width: '14px',
    height: '10px'
};

const HeaderCell = ({content, style, key, onClick}) => (
    <div className="cell header"
         style={style}
         key={key}
    >
        <IconButton className="header-button"
                    style={iconButtonStyle}
                    iconStyle={filterIconStyle}
                    onTouchTap={onClick}
                    touch={true}
        >
            <FilterIcon color={coolGreyTwo}/>
        </IconButton>
        <div className="header-title">
            {content}
        </div>
    </div>
);

export default HeaderCell;
