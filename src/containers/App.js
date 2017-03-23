import React, {Component} from 'react';

import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';

import Sidebar from './sidebar';

const titleStyle = {
    fontSize: '1.5rem',
    textAlign: 'center',
    color: '#f3f7ef',
    fontWeight: 500
};

const sidebarOverlayStyle = {
  backgroundColor: 'rgba(0, 0, 0, 0)'
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
                <AppBar title="ГЕОМОНИТОРИНГ ЗАЛОГОВ"
                        className="sber-appbar"
                        titleStyle={ titleStyle }
                        onLeftIconButtonTouchTap={this.toggleSidebar}
                />
                <Drawer open={isSidebarOpen}
                        docked={false}
                        onRequestChange={this.toggleSidebar}
                        overlayStyle={sidebarOverlayStyle}
                        width={360}
                >
                    <Sidebar/>
                </Drawer>
                {this.props.children}
            </div>
        )
    }
}

export default App;
