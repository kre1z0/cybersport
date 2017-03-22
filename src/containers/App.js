import React, {Component, PropTypes} from 'react';

import AppBar from 'material-ui/AppBar';

const titleStyle = {
    fontSize: '1.5rem',
    textAlign: 'center',
    color: '#f3f7ef',
    fontWeight: 500
};

class App extends Component {
    
    render () {
        return (
            <div className="app-container">
                <AppBar title="ГЕОМОНИТОРИНГ ЗАЛОГОВ"
                        className="sber-appbar"
                        titleStyle={ titleStyle }
                />
                {this.props.children}
            </div>
        )
    }
}

export default App;
