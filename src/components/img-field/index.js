import React from 'react';

import Avatar from 'material-ui/Avatar';
import IconButton from 'material-ui/IconButton';

import {AddPictureIcon} from '../icons';

import './image-field-button.css';

const addImgIconStyle = {
    height: 46,
    width: 46
};
const ImgButtonStyle = {
    height: 46,
    width: 46,
    padding: 0
};

const ImageFieldButton = ({children, ...props}) => (
    <IconButton className="image-field-button"
                style={ImgButtonStyle}
                iconStyle={addImgIconStyle}
                {...props}
    >
        {children}
    </IconButton>
);

export const AddImgButton = (props) => (
  <ImageFieldButton {...props}>
      <AddPictureIcon />
  </ImageFieldButton>
);

export const LoadedImgButton = ({src, ...props}) => (
    <ImageFieldButton {...props}>
        <Avatar src={src}/>
    </ImageFieldButton>
);