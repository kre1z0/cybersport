import React, {Component, PropTypes} from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import {darkGrey, softGreen} from '../../assets/theme'

import {ObjectsIcon, MapIcon, InspectionsIcon, AnalyticIcon} from '../icons';

import './main-buttons.scss'

const style = {
    height: '110px',
    minWidth: '40%',
    maxWidth: '45%',
    marginBottom: '40px',
    flexGrow: '1'
};

const labelStyle = {
    display: 'inline-flex',
    alignItems: 'center',
    height: '100%',
    fontSize: '1.286rem',
    fontWeight: 400,
    textTransform: 'normal',
    textAlign: 'left',
    width: '72%',
    paddingLeft: '22px',
    paddingTop: '2px'
};

const iconStyle = {
    width: '46px',
    height: '44px',
    position: 'relative',
    bottom: '4px'
};

const Icons = {
    objects: ObjectsIcon,
    map: MapIcon,
    inspections: InspectionsIcon,
    analytic: AnalyticIcon,
};

const MainButton = ({id, isActive, ...props}) => (
    <RaisedButton
        {...props}
        style={style}
        labelStyle={{...labelStyle, color: isActive ? softGreen : darkGrey}}
        labelPosition="after"
        overlayStyle={{backgroundColor: '#fff'}}
    >
    </RaisedButton>
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
        
        return (
            <div className="main-buttons">
                {buttons.map(({id, icon, ...props}) => {
                        const Icon = Icons[icon];
                        return (
                            <MainButton
                                {...props}
                                key={id}
                                id={id}
                                icon={<Icon style={iconStyle} isActive={activeButton === id}/>}
                                isActive={activeButton === id}
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