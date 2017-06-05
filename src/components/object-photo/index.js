import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ImageGallery from 'react-image-gallery';
import './object-photo.scss';

import Portfolio from './portfolio';
import Employees from './employees';

class ObjectPhoto extends Component {
    static propTypes = {
        attr: PropTypes.array,
        object: PropTypes.object,
        images: PropTypes.array,
        entity: PropTypes.string,
    };

    static defaultProps = {
        images: [],
    };

    render() {
        const { object, images, entity } = this.props;

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
                {entity === 'portfolio'
                    ? <Portfolio objects={object} />
                    : <Employees objects={object} />}
            </div>
        );
    }
}

export default ObjectPhoto;
