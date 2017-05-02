import React from 'react';
import classNames from 'classnames';
import ObjectAddressItemEdit from './object-address-item-edit'

const ObjectAddressItem = ({alias, editorType, isEditable, content}) => {
  const objectAddressItem = classNames('object-address-item',
    {edit: editorType === 'address' && isEditable === true});

  return (
    <div className={objectAddressItem}>
      <div className="object-address-item-title">
        {alias}
      </div>
      <div className="object-address-item-content">
        {(editorType === 'address' && isEditable === true)
          ? <ObjectAddressItemEdit content={content} />
          : <span>{content}</span>}
      </div>
    </div>
  )
};

export default ObjectAddressItem;
