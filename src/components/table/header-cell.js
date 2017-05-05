import React from 'react';
import HeaderPopup from './header-popup';


const HeaderCell = ({name, content, query, onApply, popup, onClick}) => (
    <div className="cell --header">
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
