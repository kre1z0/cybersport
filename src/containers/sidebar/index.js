import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';

import SidebarMenu from '../../components/sidebar-menu';

class Sidebar extends Component {
    static propTypes = {
    
    };
    
    render () {
        console.info(this.props);
        return (
            <div>
                <SidebarMenu></SidebarMenu>
            </div>
        )
    }
}

const mapProps = () => ({

});

const mapActions = {

};

export default connect(mapProps, mapActions)(Sidebar);
