import React from 'react';
import ObjectPhotoItem from './object-photo-item';
import numeral from 'numeral';

export default ({
    objects: {
        department,
        email,
        full_name,
        gid,
        progress,
        role_name,
        tb_name,
        manager_full_name,
    },
}) => (
    <div className="object-photo-right-col">
        <div className="right-col-header">
            {full_name}
        </div>
        <div className="right-col-content">
            <ObjectPhotoItem
                alias={'Выполнение плана'}
                content={`${progress || 0}%`}
            />
            <ObjectPhotoItem alias={'Отделение'} content={department} />
            <ObjectPhotoItem alias={'E-mail'} content={email} />
            <ObjectPhotoItem alias={'GID'} content={gid} />
            <ObjectPhotoItem alias={'Роль'} content={role_name} />
            <ObjectPhotoItem alias={'ТБ'} content={tb_name} />
            <ObjectPhotoItem
                alias={'Руководитель'}
                content={manager_full_name}
            />
        </div>
    </div>
);
