import React from 'react';

import './HeaderTitleBlock.scss';

const ControlItem = ({icon, disabled}) => (

    <a className="control-item" {...{disabled}}>
        {icon}
    </a>

);

export default ControlItem;
