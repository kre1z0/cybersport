import React, { Component } from 'react';
import PropTypes from 'prop-types';

import ModalWindow from '../../components/modal-window';
import ObjectPhoto from '../../components/object-photo';

class GalleryWindow extends Component {
    static propTypes = {
        open: PropTypes.bool,
        object: PropTypes.array,
        onRequestClose: PropTypes.func,
        images: PropTypes.array,
    };

    render() {
        const { open, object, onRequestClose, images } = this.props;

        return (
            <ModalWindow
                contentClassName="object-photo-modal"
                bodyStyle={{
                    padding: 0,
                    height: '100%',
                }}
                open={open}
                onRequestClose={onRequestClose}
            >
                <ObjectPhoto object={object} images={images} />
            </ModalWindow>
        );
    }
}

export default GalleryWindow;
