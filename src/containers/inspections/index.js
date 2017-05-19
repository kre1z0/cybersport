import React, { Component } from 'react';
import { connect } from 'react-redux';

class Inspections extends Component {
    render() {
        return (
            <div className="--padding">
                Inspections
            </div>
        );
    }
}

const mapProps = () => ({});

const mapActions = {};

export default connect(mapProps, mapActions)(Inspections);
