import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';

/**
 * ripple style not work correctly
 * https://github.com/callemall/material-ui/blob/master/src/RaisedButton/RaisedButton.js
 */
import './rounded-button.scss';

const RoundedButton = ({overlayStyle, style, buttonStyle, labelStyle, ...props}) => (
    <RaisedButton {...props}
                  className="rounded-button"
                  labelStyle={labelStyle}
                  overlayStyle={{...overlayStyle, borderRadius: 17}}
                  style={{marginLeft: 10, marginRight: 10, ...style, borderRadius: 17}}
                  buttonStyle={{...buttonStyle, borderRadius: 17}}
    />
);

export default RoundedButton;
