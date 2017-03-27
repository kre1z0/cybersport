import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';

import SidebarProfile from '../../components/sidebar-profile';
import SidebarMenu from '../../components/sidebar-menu';
import withRouter from '../../hoc/withRouter';

class Sidebar extends Component {
    static propTypes = {
    
    };
    
    render () {
        return (
            <div className="sidebar-content">

                <SidebarProfile
                    name="Константинопольский К. К."
                    office="ЦА ПАО Сбербанк"
                    post="Руководитель ПМЗ"
                />

                <SidebarMenu {...this.props} />

            </div>
        )
    }
}

const mapProps = () => ({

});

const mapActions = {

};

export default withRouter(connect(mapProps, mapActions)(Sidebar));
