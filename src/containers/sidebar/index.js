import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import SidebarProfile from '../../components/sidebar-profile';
import SidebarMenu from '../../components/sidebar-menu';
import withRouter from '../../hoc/withRouter';

class Sidebar extends Component {
    static propTypes = {
        user: PropTypes.object.isRequired,
    };

    render() {
        const {
            user: { full_name, tb_name, role_name },
            toggleSidebar,
            ...props
        } = this.props;
        return (
            <div className="sidebar-content">

                <SidebarProfile
                    full_name={full_name}
                    tb_name={tb_name}
                    role_name={role_name}
                    toggleSidebar={toggleSidebar}
                />

                <SidebarMenu {...props} toggleSidebar={toggleSidebar} />

            </div>
        );
    }
}

const mapProps = ({ user }) => ({
    user,
});

const mapActions = {};

export default withRouter(connect(mapProps, mapActions)(Sidebar));
