import React from 'react';

import './HeaderTitleBlock.css';

const ControlItem = ({icon, disabled}) => (

    <a className="control-item" {...{disabled}}>
        {icon}
    </a>

);

export default ControlItem;
