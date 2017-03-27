import React, { PropTypes } from 'react';
import { ListItem } from 'material-ui/List';

import { softGreen } from '../../assets/theme';

const itemStyle = {
    paddingTop: '3px',
    paddingBottom: '3px',
    paddingLeft: '23px'
};

const innerStyle = {
    fontSize: '1rem',
    paddingLeft: '61px'
};

const activeStyle = {
    color: softGreen
};

const MenuItem = ({isActive, ...props}) => (
    <ListItem {...props}
              style={itemStyle}
              innerDivStyle={{...innerStyle, ...(isActive ? activeStyle : {})}}
    />
);

MenuItem.propTypes = {
    isActive: PropTypes.bool
};

export default MenuItem;

