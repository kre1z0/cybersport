import React from 'react';

const ObjectAddressItem = ({alias, name, object}) => {
  let description;
  for (const key in object) {
    if (object.hasOwnProperty(key) && name === key) {
      description = object[key]
    }
  }
  return (
  <div className="object-address-item">
    <div className="object-address-item-title">
      {alias}
    </div>
    <div className="object-address-item-description">
      {description}
    </div>
  </div>
)};

export default ObjectAddressItem;
