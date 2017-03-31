import React, {Component, PropTypes} from 'react';

import Avatar from 'material-ui/Avatar';
import IconButton from 'material-ui/IconButton';

import {AddPictureIcon} from '../icons';

import './image-loader-button.css';

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

const createFileInput = () => {
    const input = document.createElement('input');
    input.setAttribute('type', 'file');
    input.setAttribute('multiple', '');
    input.setAttribute('accept', 'image/*');
    return input;
};

const addImage = (image) => ({images}) => ({images: images.concat(image)});
const clearImages = () => ({images: []});

class ImageLoader extends Component{
    static propTypes = {

    };
    
    input = createFileInput();
    
    state = {
        images: []
    };
    
    constructor () {
        super();
        this.input.addEventListener('change', this.inputChange);
    }
    
    inputChange = () => {
        this.setState(clearImages);
        for (let file of this.input.files) {
            let fileReader = new FileReader();
            fileReader.addEventListener('load', this.fileLoaded);
            fileReader.readAsDataURL(file);
        }
    };
    
    fileLoaded = ({target}) => {
        this.setState(addImage(target.result))
    };
    
    addFiles = () => this.input.click();
    
    render () {
        const {images} = this.state;
        return (
            <div>
                {images.map((image, key) => <LoadedImgButton src={image} key={key}/>)}
                <AddImgButton onTouchTap={this.addFiles}/>
            </div>
        )
    }
}

export default ImageLoader;