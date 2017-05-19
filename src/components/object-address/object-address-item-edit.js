import React from 'react';
import TextInput from '../text-input';
import RaisedButton from 'material-ui/RaisedButton';

const AddressButton = ({ label }) => (
    <RaisedButton
        className="address-button"
        label={label}
        overlayStyle={{ borderRadius: '0 2px 2px 0' }}
        labelStyle={{
            textTransform: 'capitalize',
            fontSize: '0.928rem',
            fontWeight: '400',
        }}
        style={{
            height: 34,
            borderRadius: '0 2px 2px 0',
            boxShadow: 'none',
        }}
        primary={true}
        buttonStyle={{ borderRadius: '0 2px 2px 0' }}
    />
);

const ObjectAddressItemEdit = ({ content }) => {
    return (
        <div className="object-address-edit">
            <div className="col">
                <div className="object-address-setup">
                    <TextInput value={content} />
                    <AddressButton label="Установить" />
                </div>
            </div>
            <div className="col">
                <div className="object-address-coordinates">
                    <TextInput value={'37.65534'} />
                    <TextInput value={'55.78892'} />
                    <AddressButton label="Получить адрес" />
                </div>
            </div>
        </div>
    );
};

export default ObjectAddressItemEdit;
