import React, {Component, PropTypes} from 'react';

import AppBar from 'material-ui/AppBar';

class App extends Component {
    
    render () {
        return (
            <div className="app-container">
                <AppBar title="ГЕОМОНИТОРИНГ ЗАЛОГОВ"
                        className="sber-appbar"
                />
                {this.props.children}
            </div>
        )
    }
}

export default App;
