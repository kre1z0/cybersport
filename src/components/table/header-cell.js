import React from 'react';
import HeaderPopup from './header-popup';


const HeaderCell = ({name, content, style, query, onApply, popup, onClick}) => (
    <div className="cell --header"
         style={style}
    >
        {popup &&
            <HeaderPopup columnName={name}
                         query={query}
                         onApply={onApply}
            />
        }
        <div className="header-title">
            {content}
        </div>
    </div>
);

export default HeaderCell;
