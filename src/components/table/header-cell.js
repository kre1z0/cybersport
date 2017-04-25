import React from 'react';
import HeaderPopup from './header-popup';


const HeaderCell = ({name, content, style, popup, onClick}) => (
    <div className="cell --header"
         style={style}
    >
        {popup && <HeaderPopup columnName={name}/>}
        <div className="header-title">
            {content}
        </div>
    </div>
);

export default HeaderCell;
