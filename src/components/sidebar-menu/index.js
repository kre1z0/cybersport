import React, {Component} from 'react';
import {List} from 'material-ui/List';
import {HomeIcon, ObjectsIcon, MapIcon, EmployeesIcon, InspectionsIcon, AnalyticIcon} from '../icons';

import MenuItem from './menu-item'

class SidebarMenu extends Component {
    withToggleSidebar = (goTo) => () => {
        goTo && goTo();
        this.props.toggleSidebar();
    };
    
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
                          onTouchTap={this.withToggleSidebar(goHome)}
                          leftIcon={<HomeIcon isActive/>}
                />
                <MenuItem primaryText={'Залоговый портфель'}
                          isActive={isPortfolio()}
                          onTouchTap={this.withToggleSidebar(goPortfolio)}
                          leftIcon={<ObjectsIcon isActive/>}
                />
                <MenuItem primaryText={'Карта залогов'}
                          isActive={isMap()}
                          onTouchTap={this.withToggleSidebar(goMap)}
                          leftIcon={<MapIcon isActive/>}
                />
                <MenuItem primaryText={'Реестр сотрудников'}
                          isActive={isEmployees()}
                          onTouchTap={this.withToggleSidebar(goEmployees)}
                          leftIcon={<EmployeesIcon isActive/>}
                />
                <MenuItem primaryText={'Проверки'}
                          isActive={isVerifications()}
                          onTouchTap={this.withToggleSidebar(goVerifications)}
                          leftIcon={<InspectionsIcon isActive/>}
                />
                <MenuItem primaryText={'Аналитика'}
                          isActive={isAnalytic()}
                          onTouchTap={this.withToggleSidebar(goAnalytic)}
                          leftIcon={<AnalyticIcon isActive/>}
                />
            </List>
        )
    }
}

export default SidebarMenu;
