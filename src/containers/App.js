import React, {Component} from 'react';

import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';

import Sidebar from './sidebar';

const titleStyle = {
    fontSize: '1.5rem',
    textAlign: 'center',
    color: '#f3f7ef',
    fontWeight: 500,
    textTransform: 'uppercase',
    paddingRight: '40px'
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
                <AppBar title="геомониторинг залогов"
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
