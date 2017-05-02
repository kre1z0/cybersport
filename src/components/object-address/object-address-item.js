import React from 'react';
import classNames from 'classnames';
import TextInput from '../text-input'
import RaisedButton from 'material-ui/RaisedButton';

const AddressButton = ({label}) => (
  <RaisedButton className="address-button"
                label={label}
                overlayStyle={{borderRadius: '0 2px 2px 0'}}
                labelStyle={{textTransform: 'capitalize'}}
                style={{
                  height: 35, borderRadius: '0 2px 2px 0',
                  boxShadow: 'none'
                }}
                primary={true}
                buttonStyle={{borderRadius: '0 2px 2px 0'}}
  />
);

const ObjectAddressItem = ({alias, name, editorType, isEditable, object}) => {
  let content;

  for (const key in object) {
    if (object.hasOwnProperty(key) && name === key) {
      content = object[key]
    }
  }
  if (editorType === 'address' && isEditable === true) {
    content = (
      <div className="object-address-edit">
        <div className="col">
          <div className="object-address-setup">
            <TextInput value={content}/>
            <AddressButton label="Установить" />
          </div>
        </div>
        <div className="col">
          <div className="object-address-coordinates">
            <TextInput value={37.65534} />
            <TextInput value={55.78892} />
            <AddressButton label="Получить адрес" />
          </div>
        </div>
      </div>
    )
  }
  const objectAddressItem = classNames('object-address-item',
    {edit: editorType === 'address' && isEditable === true});

  return (
    <div className={objectAddressItem}>
      <div className="object-address-item-title">
        {alias}
      </div>
      <div className="object-address-item-content">
        {content}
      </div>
    </div>
  )
};

export default ObjectAddressItem;
