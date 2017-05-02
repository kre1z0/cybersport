import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';

import ProgressChart from '../../components/progress-chart';
import MainButtons from '../../components/main-buttons';
import withRouter from '../../hoc/withRouter';

import './home.scss';

class Home extends Component {
    static propTypes = {
        plan: PropTypes.object.isRequired,
        goPortfolio: PropTypes.func.isRequired,
        goMap: PropTypes.func.isRequired,
        goInspections: PropTypes.func.isRequired,
        goAnalytic: PropTypes.func.isRequired
    };

    render () {
        const {goPortfolio, goMap, goInspections, goAnalytic, plan: {progress}} = this.props;
    
        const buttons = [
            {
                id: 1,
                label: 'Залоговый портфель',
                icon: 'objects',
                onTouchTap: goPortfolio
            },
            {
                id: 2,
                label: 'Проверки',
                icon: 'inspections',
                onTouchTap: goInspections
            },
            {
                id: 3,
                label: 'Карта залогов',
                icon: 'map',
                onTouchTap: goMap
            },
            {
                id: 4,
                label: 'Аналитика',
                icon: 'analytic',
                onTouchTap: goAnalytic
            }
        ];

        return (
            <div className="home-container --padding">
                <div className="home-content">

                    <ProgressChart value={progress}
                                   month="март"/>
                    <MainButtons buttons={buttons}
                                 onMouseEnter={this.handleEnterButton}
                                 onMouseLeave={this.handleLeaveButton}
                    />

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



