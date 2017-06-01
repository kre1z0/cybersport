import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ImageGallery from 'react-image-gallery';
import ObjectPhotoItem from './object-photo-item';
import './object-photo.scss';
import numeral from 'numeral';

class ObjectPhoto extends Component {
    static propTypes = {
        attr: PropTypes.array,
        object: PropTypes.array,
        images: PropTypes.array,
    };

    render() {
        const { object, images } = this.props;

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
                    <div className="right-col-header" />
                    <div className="right-col-content">
                        {object.map(o => (
                            <ObjectPhotoItem
                                key={o.key}
                                alias={o.alias}
                                content={o.value}
                            />
                        ))}
                    </div>
                </div>
            </div>
        );
    }
}

export default ObjectPhoto;
