import React from 'react';
import ObjectPhotoItem from './object-photo-item';
import numeral from 'numeral';

export default ({
    objects: {
        gid,
        department,
        classifier2,
        classifier3,
        address_region,
        responsible_employee_name,
        object_description,

        address_combined,
        address_adjusted,

        liquidity,
        actual_liquidity,

        object_quality_category,
        actual_quality_category,

        original_full_value,
        actual_full_value,
    },
}) => (
    <div className="object-photo-right-col">
        <div className="right-col-header">
            {gid}
        </div>
        <div className="right-col-content">
            <ObjectPhotoItem alias={'Описание'} content={object_description} />
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
                content={actual_quality_category || object_quality_category}
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
                        : numeral(+original_full_value).format('0,0')
                }
            />
        </div>
    </div>
);
