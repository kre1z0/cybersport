import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import { darkGrey, paleGrey } from '../../assets/theme'

/**
 * ripple style not work correctly
 * https://github.com/callemall/material-ui/blob/master/src/RaisedButton/RaisedButton.js
 */
import './rounded-button.scss';

const MapPopupButton = ({overlayStyle, style, labelStyle, buttonStyle, ...props}) => (
  <RaisedButton {...props}
    className="rounded-button"
    overlayStyle={{...overlayStyle, borderRadius: 17}}
    style={{
      margin: 0,
      boxShadow: 'none',
      border: '1px solid',
      borderColor: paleGrey,
      ...style,
      borderRadius: 17
    }}
    buttonStyle={{...buttonStyle, borderRadius: 17}}
    labelStyle={{
      ...labelStyle,
      textTransform: 'none',
      color: darkGrey,
      fontWeight: 400
    }}
  />
);

export default MapPopupButton;