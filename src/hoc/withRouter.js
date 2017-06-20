import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

export default function(EnhancedComponent) {
    class Enhancer extends Component {
        isHome = () => this.props.location.pathname === '/';
        goHome = () => this.props.history.push('/');

        render() {
            return (
                <EnhancedComponent
                    isHome={this.isHome}
                    goHome={this.goHome}
                    {...this.state}
                    {...this.props}
                />
            );
        }
    }

    return withRouter(Enhancer);
}
