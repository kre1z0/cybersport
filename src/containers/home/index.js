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

    state = {
        isActive: false
    };

    handleEnterButton = (id) => {
        this.setState(() => ({
            isActive: id
        }));
    };

    handleLeaveButton = () => {
        this.setState(() => ({
            isActive: null
        }));
    };

    render () {
        const {isActive} = this.state;

        const mainButtons = [
            {
                id: 1,
                label: 'Залоговый портфель',
                icon: <ObjectsIcon style={iconStyle} isActive={isActive === 1} />
            },
            {
                id: 2,
                label: 'Проверки',
                icon: <InspectionsIcon style={iconStyle} isActive={isActive === 2} />
            },
            {
                id: 3,
                label: 'Карта залогов',
                icon: <MapIcon  style={iconStyle} isActive={isActive === 3} />
            },
            {
                id: 4,
                label: 'Аналитика',
                icon: <AnalyticIcon style={iconStyle} isActive={isActive === 4} />
            }
        ];

        return (
            <div className="home-container">
                <div className="home-content">

                    <ProgressChart value={75} month="март"/>

                    <div className="home-buttons">
                        {mainButtons.map(({id, icon, label}) =>
                            <MainButton
                                key={id}
                                id={id}
                                icon={icon}
                                label={label}
                                isActive={isActive}
                                onEnterButton={() => this.handleEnterButton(id)}
                                onLeaveButton={this.handleLeaveButton}
                            />
                        )}
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



