import React, { Component } from 'react';
import IconButton from 'material-ui/IconButton';
import {CloseMapPopupIcon} from '../icons';
import './map-popup.scss';

const closeButtonStyle = {
  position: 'absolute',
  right: 30,
  top: 30
};

const CloseWindowButton = (props) => (
  <IconButton {...props}
    style={closeButtonStyle}>
    <CloseMapPopupIcon/>
  </IconButton>
);


class MapPopup extends Component {
  render() {
    const {children} = this.props
    return (
      <div className='map-popup'>
        <div className="triangle-with-shadow" />
        {children}
      </div>
    )
  }
}

export default MapPopup;
