import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ImageGallery from 'react-image-gallery';
import ObjectPhotoItem from './object-photo-item';
import { TYPES } from '../table/cell-switcher';
import './object-photo.scss';
import numeral from 'numeral';

class ObjectPhoto extends Component {
    static propTypes = {
        attr: PropTypes.array,
        object: PropTypes.object,
        images: PropTypes.array,
    };

    render() {
        const { attr, object, images } = this.props;

        return (
            <div className="object-photo">
                <div className="object-photo-left-col">
                    <ImageGallery
                        showPlayButton={false}
                        items={
                            images.map
                                ? images.map(image => ({
                                      original: image,
                                      thumbnail: image,
                                  }))
                                : []
                        }
                        showFullscreenButton={false}
                        slideInterval={2000}
                    />
                </div>
                <div className="object-photo-right-col">
                    <div className="right-col-header">
                        {object.object_description}
                    </div>
                    <div className="right-col-content">
                        {attr.map(({ name, alias, type }) => {
                            return (
                                <ObjectPhotoItem
                                    key={name}
                                    alias={alias}
                                    name={name}
                                    content={
                                        type === TYPES.NUMBER
                                            ? numeral(+object[name]).format(
                                                  '0,0',
                                              )
                                            : object[name]
                                    }
                                />
                            );
                        })}
                    </div>
                </div>
            </div>
        );
    }
}

export default ObjectPhoto;
