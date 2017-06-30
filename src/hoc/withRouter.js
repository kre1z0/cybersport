import React, { Component } from 'react';
import getDisplayName from './getDisplayName';

import { withRouter } from 'react-router-dom';

export default function(EnhancedComponent) {
    class Enhancer extends Component {
        isHome = () => this.props.location.pathname === '/';
        goHome = () => this.props.history.push('/');

        isHeroes = () => this.props.location.includes('/heroes');
        goHeroes = () => this.props.history.push('/heroes');

        render() {
            return (
                <EnhancedComponent
                    isHome={this.isHome}
                    goHome={this.goHome}
                    isHeroes={this.isHeroes}
                    goHeroes={this.goHeroes}
                    {...this.state}
                    {...this.props}
                />
            );
        }
    }

    Enhancer.displayName = `withRouter(${getDisplayName(EnhancedComponent)})`;

    return withRouter(Enhancer);
}
