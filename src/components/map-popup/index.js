import React, { Component } from 'react';
import IconButton from 'material-ui/IconButton';
import { CloseMapPopupIcon } from '../icons';
import { coolGreyTwo } from '../../assets/theme'
import './map-popup.scss';

const closeButtonStyle = {
  position: 'absolute',
  right: 12,
  top: 12
};

const closeSvgStyle = {
  height: 12,
  width: 12
};

const CloseWindowButton = (props) => (
  <IconButton {...props}
    style={closeButtonStyle}>
    <CloseMapPopupIcon svgColor={coolGreyTwo} svgStyle={closeSvgStyle} />
  </IconButton>
);


class MapPopup extends Component {
  render() {
    const {children, style} = this.props
    return (
      <div className='map-popup' style={style}>
        <CloseWindowButton />
        {/*<div className="triangle-with-shadow" />*/}
        {children}
      </div>
    )
  }
}

export default MapPopup;
