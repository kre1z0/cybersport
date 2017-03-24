import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import './home.css';
import {setCenter, resetMap} from '../../actions/map';
import ProgressChart from '../../components/ProgressChart';
import MainButton from '../../components/MainButton';

class Home extends Component {
    static propTypes = {
        center: PropTypes.array.isRequired
    };

    render () {
        return (
            <div className="home-container">
                <div className="home-content">

                    <ProgressChart value={75} month="март"/>

                    <div className="home-buttons">
                        <MainButton label="Залоговый портфель" />
                        <MainButton label="Проверки" />
                        <MainButton label="Карта залогов" />
                        <MainButton label="Аналитика" />
                    </div>

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



