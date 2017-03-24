import React, {Component, PropTypes} from 'react';
import {List} from 'material-ui/List';
import {HomeIcon, ObjectsIcon, MapIcon, EmployeesIcon, InspectionsIcon, AnalyticIcon} from '../icons';

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
                          leftIcon={<HomeIcon isActive/>}
                />
                <MenuItem primaryText={'Залоговый портфель'}
                          isActive={isPortfolio()}
                          onTouchTap={goPortfolio}
                          leftIcon={<ObjectsIcon isActive/>}
                />
                <MenuItem primaryText={'Карта залогов'}
                          isActive={isMap()}
                          onTouchTap={goMap}
                          leftIcon={<MapIcon isActive/>}
                />
                <MenuItem primaryText={'Реестр сотрудников'}
                          isActive={isEmployees()}
                          onTouchTap={goEmployees}
                          leftIcon={<EmployeesIcon isActive/>}
                />
                <MenuItem primaryText={'Проверки'}
                          isActive={isVerifications()}
                          onTouchTap={goVerifications}
                          leftIcon={<InspectionsIcon isActive/>}
                />
                <MenuItem primaryText={'Аналитика'}
                          isActive={isAnalytic()}
                          onTouchTap={goAnalytic}
                          leftIcon={<AnalyticIcon isActive/>}
                />
            </List>
        )
    }
}

export default SidebarMenu;
