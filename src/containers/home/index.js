import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';

import {ObjectsIcon, MapIcon, InspectionsIcon, AnalyticIcon} from '../../components/icons';
import ProgressChart from '../../components/progress-chart';
import MainButton from '../../components/main-button';
import withRouter from '../../hoc/withRouter';

import './Home.css';

const iconStyle = {
    width: '46px',
    height: '44px',
    position: 'relative',
    bottom: '4px'
};

class Home extends Component {
    static propTypes = {
        plan: PropTypes.object.isRequired,
        goPortfolio: PropTypes.func.isRequired,
        goMap: PropTypes.func.isRequired,
        goInspections: PropTypes.func.isRequired,
        goAnalytic: PropTypes.func.isRequired
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
        const {goPortfolio, goMap, goInspections, goAnalytic, plan: {progress}} = this.props;
        const {isActive} = this.state;

        const mainButtons = [
            {
                id: 1,
                label: 'Залоговый портфель',
                icon: <ObjectsIcon style={iconStyle} isActive={isActive === 1} />,
                onTouchTap: goPortfolio
            },
            {
                id: 2,
                label: 'Проверки',
                icon: <InspectionsIcon style={iconStyle} isActive={isActive === 2} />,
                onTouchTap: goInspections
            },
            {
                id: 3,
                label: 'Карта залогов',
                icon: <MapIcon  style={iconStyle} isActive={isActive === 3} />,
                onTouchTap: goMap
            },
            {
                id: 4,
                label: 'Аналитика',
                icon: <AnalyticIcon style={iconStyle} isActive={isActive === 4} />,
                onTouchTap: goAnalytic
            }
        ];

        return (
            <div className="home-container">
                <div className="home-content">

                    <ProgressChart value={progress} month="март"/>

                    <div className="home-buttons">
                        {mainButtons.map(({id, ...props}) =>
                            <MainButton
                                {...props}
                                key={id}
                                id={id}
                                isActive={isActive}
                                onMouseEnter={() => this.handleEnterButton(id)}
                                onMouseLeave={this.handleLeaveButton}
                            />
                        )}
                    </div>

                </div>
            </div>
        );
    }
}

const mapProps = ({plan}) => ({
    plan
});

const mapActions = {

};

export default withRouter(connect(mapProps, mapActions)(Home));



