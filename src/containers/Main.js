/**
 * Created by tporyadin on 3/6/2017.
 */
import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';

import {setCenter, resetMap} from '../actions/map';

import Map from '../components/map';

class Main extends Component {
    static propTypes = {
        center: PropTypes.array.isRequired
    };
    
    render () {
        const {center, setCenter, resetMap} = this.props;
        return (
            <Map center={center}
                 onCenterChange={setCenter}
                 onResetMap={resetMap}
            />
        );
    }
}

const mapProps = ({map: {center}}) => ({
    center
});

const mapActions = {
    setCenter,
    resetMap
};

export default connect(mapProps, mapActions)(Main);



