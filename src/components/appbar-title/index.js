import React from 'react';
import Logo from '../../assets/icons/logo.svg';

import './appbar-title.scss';

const AppbarTitle = () => (
    <div className="appbar-title">
        <img className="logo" src={Logo} alt="сбербанк"/>
        <h1>геомониторинг залогов</h1>
    </div>
);

export default AppbarTitle;

