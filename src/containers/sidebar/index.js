import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';

import SidebarMenu from '../../components/sidebar-menu';
import withRouter from '../../hoc/withRouter';

class Sidebar extends Component {
    static propTypes = {
    
    };
    
    render () {
        return (
            <div className="sidebar-content">
                <SidebarMenu {...this.props}
                />
            </div>
        )
    }
}

const mapProps = () => ({

});

const mapActions = {

};

export default withRouter(connect(mapProps, mapActions)(Sidebar));
