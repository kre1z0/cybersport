import React from 'react';

import './HeaderTitleBlock.scss';

const ControlItem = ({icon, onTouchTap, disabled}) => (

    <a className="control-item" {...{disabled}}
       onTouchTap={onTouchTap}
    >
        {icon}
    </a>

);

export default ControlItem;
