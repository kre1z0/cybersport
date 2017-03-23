import React, { PropTypes } from 'react';
import { ListItem } from 'material-ui/List';

const activeStyle = {
  color: '#64c76c'
};

const MenuItem = ({isActive, ...props}) => (
    <ListItem {...props}
              innerDivStyle={isActive ? activeStyle : {}}
    />
);

MenuItem.propTypes = {
    isActive: PropTypes.bool
};

export default MenuItem;

