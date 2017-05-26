import React, { Component } from 'react';
import PropTypes from 'prop-types';

import ModalWindow from '../../components/modal-window';
import ObjectPhoto from '../../components/object-photo';

const GALLERY_COLUMNS = [
    'gid',
    'department',
    'classifier2',
    'classifier3',
    'address_region',
    'address_combined',
    'liquidity',
    'object_quality_category',
    'original_full_value',
    'responsible_employee_name',
];

class GalleryWindow extends Component {
    static propTypes = {
        open: PropTypes.bool,
        object: PropTypes.object,
        attributes: PropTypes.array,
        onRequestClose: PropTypes.func,
        images: PropTypes.array,
    };

    render() {
        const { open, object, attributes, onRequestClose, images } = this.props;
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
                <ObjectPhoto
                    attr={attributes.filter(attr =>
                        GALLERY_COLUMNS.includes(attr.name),
                    )}
                    object={object}
                    images={images}
                />
            </ModalWindow>
        );
    }
}

export default GalleryWindow;
