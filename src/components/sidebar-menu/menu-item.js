import React, { PropTypes } from 'react';
import { ListItem } from 'material-ui/List';

import { softGreen } from '../../assets/theme';

const innerStyle = {
  fontSize: '1rem'
};

const activeStyle = {
  color: softGreen
};

const MenuItem = ({isActive, ...props}) => (
    <ListItem {...props}
              innerDivStyle={{...innerStyle, ...(isActive ? activeStyle : {})}}
    />
);

MenuItem.propTypes = {
    isActive: PropTypes.bool
};

export default MenuItem;

