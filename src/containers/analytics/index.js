import React, { Component } from 'react';
import { connect } from 'react-redux';
import PlanWindow from '../../components/plan-window';

class Analytics extends Component {
    render() {
        return (
            <div className="--padding">
                Analytics
                <PlanWindow />
            </div>
        );
    }
}

const mapProps = () => ({});

const mapActions = {};

export default connect(mapProps, mapActions)(Analytics);
