import React, {Component, PropTypes} from 'react';
import {darkGrey, softGreen} from '../../assets/theme'

import {ObjectsIcon, MapIcon, InspectionsIcon, AnalyticIcon} from '../icons';

import './main-buttons.scss'

const iconStyle = {
    width: '46px',
    height: '44px',
    position: 'relative',
};

const Icons = {
    objects: ObjectsIcon,
    map: MapIcon,
    inspections: InspectionsIcon,
    analytic: AnalyticIcon,
};

const MainButton = ({id, isActive, label, onTouchTap, icon, ...props}) => (
  <div className='home-button'
    onClick={onTouchTap}
    {...props}
  >
    <div className='home-button-ico'>{icon}</div>
      <div className="home-button-label" style={{color: isActive ? softGreen : darkGrey}} >
        {label}
      </div>
  </div>
);

class MainButtons extends Component {
    static propTypes = {
        buttons: PropTypes.arrayOf(PropTypes.object).isRequired
    };

    state = {
        activeButton: null
    };

    handleEnterButton = (id) => {
        this.setState(() => ({
            activeButton: id
        }));
    };

    handleLeaveButton = () => {
        this.setState(() => ({
            activeButton: null
        }));
    };

    render () {
        const {buttons} = this.props;
        const {activeButton} = this.state;
        console.log(activeButton)
        return (
            <div className="main-buttons">
                {buttons.map(({id, icon, label, onTouchTap, ...props}) => {
                        const Icon = Icons[icon];
                        return (
                            <MainButton
                                {...props}
                                key={id}
                                id={id}
                                label={label}
                                icon={<Icon style={iconStyle} isActive={activeButton === id}/>}
                                isActive={activeButton === id}
                                onTouchTap={onTouchTap}
                                onMouseEnter={() => this.handleEnterButton(id)}
                                onMouseLeave={this.handleLeaveButton}
                            />
                        )
                    }
                )}
            </div>
        )
    }

}

export default MainButtons;