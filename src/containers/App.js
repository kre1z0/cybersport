import React, {Component} from 'react';

import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';

import Sidebar from './sidebar';
import Title from '../components/appbar-title';

const titleStyle = {
    textAlign: 'center'
};

const sidebarOverlayStyle = {
  backgroundColor: 'rgba(0, 0, 0, 0)'
};

const sidebarContainerStyle = {
    boxShadow: '10px 0 20px 0 rgba(24, 25, 26, 0.12)'
};

class App extends Component {
    state = {
        isSidebarOpen: false
    };
    
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
                        containerStyle={sidebarContainerStyle}
                >
                    <Sidebar toggleSidebar={this.toggleSidebar}/>
                </Drawer>

                <div className="pages-container">
                    {this.props.children}
                </div>
            </div>
        )
    }
}

export default App;
