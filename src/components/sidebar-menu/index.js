import React, {Component} from 'react';
import {List} from 'material-ui/List';
import {HomeIcon, ObjectsIcon, MapIcon, EmployeesIcon, InspectionsIcon, AnalyticIcon} from '../icons';

import MenuItem from './menu-item'

const listStyle = {
    paddingTop: '36px'
};

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
            isInspections,
            goInspections,
            isAnalytic,
            goAnalytic
        } = this.props;
        
        return (
            <List style={listStyle}>
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
                          isActive={isInspections()}
                          onTouchTap={this.withToggleSidebar(goInspections)}
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
