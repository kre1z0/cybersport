import React, { Component } from 'react';

import { withRouter } from 'react-router-dom';

export default function(EnhancedComponent) {
    class Enhancer extends Component {
        isHome = () => this.props.location.pathname === '/';
        goHome = () => this.props.history.push('/');

        isPortfolio = () => this.props.location.pathname.includes('/portfolio');
        goPortfolio = () => this.props.history.push('/portfolio');

        isMap = () => this.props.location.pathname.includes('/map');
        goMap = () => this.props.history.push('/map');

        isEmployees = () => this.props.location.pathname.includes('/employees');
        goEmployees = () => this.props.history.push('/employees');

        isInspections = () =>
            this.props.location.pathname.includes('/inspections');
        goInspections = () => this.props.history.push('/inspections');

        isAnalytic = () => this.props.location.pathname.includes('/analytic');
        goAnalytic = () => this.props.history.push('/analytic');

        render() {
            return (
                <EnhancedComponent
                    isHome={this.isHome}
                    goHome={this.goHome}
                    isPortfolio={this.isPortfolio}
                    goPortfolio={this.goPortfolio}
                    isMap={this.isMap}
                    goMap={this.goMap}
                    isEmployees={this.isEmployees}
                    goEmployees={this.goEmployees}
                    isInspections={this.isInspections}
                    goInspections={this.goInspections}
                    isAnalytic={this.isAnalytic}
                    goAnalytic={this.goAnalytic}
                    {...this.state}
                    {...this.props}
                />
            );
        }
    }

    return withRouter(Enhancer);
}
