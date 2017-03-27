import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import {darkGrey, softGreen} from '../../assets/theme'

const style = {
    height: '110px',
    width: '360px',
    marginBottom: '40px'
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

const MainButton = ({id, label, icon, isActive, onEnterButton, onLeaveButton}) => (

    <RaisedButton
        {...{label, icon, style}}
        labelStyle={{...labelStyle, color: isActive === id ? softGreen : darkGrey}}
        labelPosition="after"

        rippleStyle={{color: softGreen}}
        overlayStyle={{backgroundColor: '#fff'}}
        onMouseEnter={onEnterButton}
        onMouseLeave={onLeaveButton}
    />

);

export default MainButton;