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
        const {
            attr,
            object: {
                object_description,
                gid,
                department,
                classifier2,
                classifier3,
                address_region,
                responsible_employee_name,

                address_combined,
                address_adjusted,

                liquidity,
                actual_liquidity,

                object_quality_category,
                actual_quality_category,

                original_full_value,
                actual_full_value,
            },
            images,
        } = this.props;

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
                        {object_description}
                    </div>
                    <div className="right-col-content">
                        <ObjectPhotoItem alias={'ID'} content={gid} />
                        <ObjectPhotoItem alias={'ТБ'} content={department} />
                        <ObjectPhotoItem
                            alias={'Ответственный'}
                            content={responsible_employee_name}
                        />
                        <ObjectPhotoItem
                            alias={'Регион объекта'}
                            content={address_region}
                        />
                        <ObjectPhotoItem
                            alias={'Адрес объекта'}
                            content={address_adjusted || address_combined}
                        />
                        <ObjectPhotoItem
                            alias={'2 уровень классификатора'}
                            content={classifier2}
                        />
                        <ObjectPhotoItem
                            alias={'3 уровень классификатора'}
                            content={classifier3}
                        />
                        <ObjectPhotoItem
                            alias={'Категория'}
                            content={
                                actual_quality_category ||
                                    object_quality_category
                            }
                        />
                        <ObjectPhotoItem
                            alias={'Ликвидность'}
                            content={actual_liquidity || liquidity}
                        />
                        <ObjectPhotoItem
                            alias={'Оценочная стоимость'}
                            content={
                                actual_full_value
                                    ? numeral(+actual_full_value).format('0,0')
                                    : numeral(+original_full_value).format(
                                          '0,0',
                                      )
                            }
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default ObjectPhoto;
