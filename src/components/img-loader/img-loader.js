import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Avatar from 'material-ui/Avatar';
import IconButton from 'material-ui/IconButton';

import { AddPictureIcon } from '../icons';
import RemoveImageWindow from './remove-image-window';

import './image-loader-button.scss';

const addImgIconStyle = {
    height: 46,
    width: 46,
    marginRight: 10,
};
const ImgButtonStyle = {
    height: 46,
    width: 46,
    padding: 0,
    marginRight: 10,
};

const ImageFieldButton = ({ children, ...props }) => (
    <IconButton
        className="image-field-button"
        style={ImgButtonStyle}
        iconStyle={addImgIconStyle}
        {...props}
    >
        {children}
    </IconButton>
);

export const AddImgButton = props => (
    <ImageFieldButton {...props}>
        <AddPictureIcon />
    </ImageFieldButton>
);

export const LoadedImgButton = ({ src, ...props }) => (
    <ImageFieldButton {...props}>
        <Avatar src={src} />
    </ImageFieldButton>
);

const createFileInput = () => {
    const input = document.createElement('input');
    input.setAttribute('type', 'file');
    input.setAttribute('multiple', '');
    input.setAttribute('accept', 'image/*');
    return input;
};

const addImage = image => ({ images }) => ({ images: images.concat(image) });
const removeImage = removedName => ({ images }) => ({
    images: images.filter(({ name }) => name !== removedName),
});
const clearImages = () => ({ images: [] });

const readAsDataURL = file =>
    new Promise((resolve, reject) => {
        const fileReader = new FileReader();
        fileReader.addEventListener('load', ({ target }) =>
            resolve({
                name: file.name,
                dataURL: target.result,
            }),
        );
        fileReader.addEventListener('error', e => reject(e));
        fileReader.readAsDataURL(file);
    });

class ImageLoader extends Component {
    static propTypes = {
        /** on file list change event*/
        onChange: PropTypes.func,
    };

    input = createFileInput();
    files = [];

    state = {
        images: [],
        removeWindowOpen: false,
    };

    constructor() {
        super();
        this.input.addEventListener('change', this.inputChange);
    }

    inputChange = () => {
        this.setState(clearImages);

        this.files = Array.from(this.input.files);

        this.files.forEach(file => {
            readAsDataURL(file).then(this.dataUrlLoaded);
        });
    };

    dataUrlLoaded = result => this.setState(addImage(result));

    addFiles = () => this.input.click();

    closeRemoveWindow = () =>
        this.setState(({ removeWindowOpen }) => ({ removeWindowOpen: false }));
    showRemoveWindow = img => () =>
        this.setState(({ removeWindowOpen }) => ({ removeWindowOpen: img }));

    removeFile = name => {
        this.setState(removeImage(name));
        this.files = this.files.filter(file => file.name !== name);
        this.closeRemoveWindow();
    };

    render() {
        const { images, removeWindowOpen } = this.state;
        return (
            <div>
                {images.map(({ name, dataURL }) => (
                    <LoadedImgButton
                        src={dataURL}
                        key={name}
                        onTouchTap={this.showRemoveWindow({ name, dataURL })}
                    />
                ))}
                <AddImgButton onTouchTap={this.addFiles} />
                <RemoveImageWindow
                    src={removeWindowOpen.dataURL}
                    name={removeWindowOpen.name}
                    onRequestClose={this.closeRemoveWindow}
                    onRemove={this.removeFile}
                    open={!!removeWindowOpen}
                />
            </div>
        );
    }
}

export default ImageLoader;
