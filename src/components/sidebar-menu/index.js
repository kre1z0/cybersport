import React, {Component, PropTypes} from 'react';
import {List} from 'material-ui/List';
import HomeIcon from 'material-ui/svg-icons/action/home';

import MenuItem from './menu-item'

class SidebarMenu extends Component {
    render () {
        const {
            isHome,
            goHome,
            isPortfolio,
            goPortfolio,
            isMap,
            goMap,
            isEmployees,
            goEmployees,
            isVerifications,
            goVerifications,
            isAnalytic,
            goAnalytic
        } = this.props;
        
        return (
            <List>
                <MenuItem primaryText={'Главная'}
                          isActive={isHome()}
                          onTouchTap={goHome}
                          leftIcon={<HomeIcon />}
                />
                <MenuItem primaryText={'Залоговый портфель'}
                          isActive={isPortfolio()}
                          onTouchTap={goPortfolio}
                          leftIcon={<HomeIcon />}
                />
                <MenuItem primaryText={'Карта залогов'}
                          isActive={isMap()}
                          onTouchTap={goMap}
                          leftIcon={<HomeIcon />}
                />
                <MenuItem primaryText={'Реестр сотрудников'}
                          isActive={isEmployees()}
                          onTouchTap={goEmployees}
                          leftIcon={<HomeIcon />}
                />
                <MenuItem primaryText={'Проверки'}
                          isActive={isVerifications()}
                          onTouchTap={goVerifications}
                          leftIcon={<HomeIcon />}
                />
                <MenuItem primaryText={'Аналитика'}
                          isActive={isAnalytic()}
                          onTouchTap={goAnalytic}
                          leftIcon={<HomeIcon />}
                />
            </List>
        )
    }
}

export default SidebarMenu;
