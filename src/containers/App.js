import React, {Component} from 'react';
import { connect } from 'react-redux';
import {withRouter} from 'react-router-dom';

import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';

import Sidebar from './sidebar';
import Title from '../components/appbar-title';

import {getUser} from '../ducks/user';

const titleStyle = {
    textAlign: 'center'
};

const sidebarOverlayStyle = {
    backgroundColor: 'rgba(0, 0, 0, 0)'
};

class App extends Component {
    state = {
        isSidebarOpen: false
    };
    
    componentDidMount () {
        this.props.getUser();
    }
    
    toggleSidebar = () => {
        this.setState(({isSidebarOpen}) => ({
            isSidebarOpen: !isSidebarOpen
        }));
    };
    
    render () {
        const {isSidebarOpen} = this.state;
        
        return (
            <div className="app-container">
                <AppBar title={<Title/>}
                        className="sber-appbar"
                        titleStyle={ titleStyle }
                        onLeftIconButtonTouchTap={this.toggleSidebar}
                />
                <Drawer open={isSidebarOpen}
                        docked={false}
                        onRequestChange={this.toggleSidebar}
                        width={360}
                        overlayStyle={sidebarOverlayStyle}
                        zDepth={4}
                >
                    <Sidebar toggleSidebar={this.toggleSidebar} />
                </Drawer>

                <div className="pages-container">
                    {this.props.children}
                </div>
            </div>
        )
    }
}

const mapProps = ({user}) => ({
    user
});

const mapActions = {
    getUser,
};

export default withRouter(connect(mapProps, mapActions)(App));
