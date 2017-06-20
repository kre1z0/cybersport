import React, { Component } from 'react';
import { connect } from 'react-redux';
import withRouter from '../hoc/withRouter';

class App extends Component {
    render() {
        return (
            <div className="app-container">
                <div className="pages-container">
                    {this.props.children}
                </div>
            </div>
        );
    }
}

const mapProps = () => ({});

const mapActions = {};

export default withRouter(connect(mapProps, mapActions)(App));
