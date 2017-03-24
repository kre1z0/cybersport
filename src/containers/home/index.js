import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import './home.css';
import {setCenter, resetMap} from '../../actions/map';
import ProgressChart from '../../components/ProgressChart';

class Home extends Component {
    static propTypes = {
        center: PropTypes.array.isRequired
    };
    
    render () {
        return (
            <div className="home-container">
                <div className="home-content">

                <ProgressChart
                    value={75}
                    month="март"
                />

                </div>
            </div>
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

export default connect(mapProps, mapActions)(Home);



