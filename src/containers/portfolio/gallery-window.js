import React, { Component } from 'react';
import PropTypes from 'prop-types';

import ModalWindow from '../../components/modal-window';
import ObjectPhoto from '../../components/object-photo';

class GalleryWindow extends Component {
    static propTypes = {
        open: PropTypes.bool,
        object: PropTypes.object,
        onRequestClose: PropTypes.func,
        images: PropTypes.array,
        entity: PropTypes.string,
    };

    render() {
        const { open, object, onRequestClose, images, entity } = this.props;

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
                <ObjectPhoto object={object} images={images} entity={entity} />
            </ModalWindow>
        );
    }
}

export default GalleryWindow;
