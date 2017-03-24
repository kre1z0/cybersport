import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import './home.css';
import {setCenter, resetMap} from '../../actions/map';
import {ObjectsIcon, MapIcon, InspectionsIcon, AnalyticIcon} from '../../components/icons';
import ProgressChart from '../../components/ProgressChart';
import MainButton from '../../components/MainButton';

const iconStyle = {
    width: '46px',
    height: '44px',
    position: 'relative',
    bottom: '4px'
};

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
                        <MainButton
                            icon={<ObjectsIcon style={iconStyle} isActive />}
                            label="Залоговый портфель"
                            isActive
                        />
                        <MainButton
                            icon={<InspectionsIcon style={iconStyle} />}
                            label="Проверки"
                        />
                        <MainButton
                            icon={<MapIcon style={iconStyle} />}
                            label="Карта залогов"
                        />
                        <MainButton
                            icon={<AnalyticIcon style={iconStyle} />}
                            label="Аналитика"
                        />
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



