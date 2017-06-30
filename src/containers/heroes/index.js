import React, { Component } from 'react';
import { connect } from 'react-redux';

class Heroes extends Component {
    render() {
        return (
            <div>
                HEROES
            </div>
        );
    }
}

const mapProps = ({ twitch }) => ({});

const mapActions = {};

export default connect(mapProps, mapActions)(Heroes);
