import React from 'react';
import Logo from '../../assets/icons/logo.svg';

import './appbar-title.scss';

const AppbarTitle = ({ goHome }) => (
    <div className="appbar-title">
        <img onTouchTap={goHome} className="logo" src={Logo} alt="сбербанк" />
        <h1>геомониторинг залогов</h1>
    </div>
);

export default AppbarTitle;
