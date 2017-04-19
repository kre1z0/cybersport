import React from 'react';
import HeaderPopup from './header-popup';


const HeaderCell = ({name, content, style, onClick}) => (
    <div className="cell --header"
         style={style}
    >
        <HeaderPopup columnName={name} onApply={e => console.info(e)}/>
        <div className="header-title">
            {content}
        </div>
    </div>
);

export default HeaderCell;
