import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';

/**
 * ripple style not work correctly
 * https://github.com/callemall/material-ui/blob/master/src/RaisedButton/RaisedButton.js
 */
import './rounded-button.css';

const RoundedButton = ({overlayStyle, style, buttonStyle, ...props}) => (
    <RaisedButton {...props}
                  className="rounded-button"
                  overlayStyle={{...overlayStyle, borderRadius: 17}}
                  style={{...style, borderRadius: 17}}
                  buttonStyle={{...buttonStyle, borderRadius: 17}}
    />
);

export default RoundedButton;
