import React from 'react';
import RaisedButton from 'material-ui/RaisedButton'

const style = {
    height: '110px',
    width: '360px',
    marginBottom: '40px'
};

const labelStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    fontSize: '1.286rem',
    textTransform: 'normal'
};

function MainButton({label}) {
    return (
        <RaisedButton {...{label, style, labelStyle}} />
    );
}

export default MainButton;