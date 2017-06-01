import React from 'react';
import TextInput from '../text-input';
import SelectField from '../select-field';
import ImageLoader from '../img-loader/img-loader';
import DatePicker from '../date-picker';
import AutoComplete from '../auto-complete-input';

export const TYPES = {
    TEXT: 'text',
    NUMBER: 'number',
    ADDRESS: 'address',
    TEXT_AREA: 'text-area',
    SELECT: 'select',
    IMG: 'img-loader',
    DATE: 'date',
    AUTO_COMPLETE: 'autocomplete',
};

const InputSwitcher = ({ type, domain, ...props }) => {
    switch (type) {
        case TYPES.IMG:
            return <ImageLoader {...props} />;
        case TYPES.TEXT:
            return <TextInput {...props} />;
        case TYPES.ADDRESS:
            return <TextInput {...props} />;
        case TYPES.NUMBER:
            return <TextInput {...props} />;
        case TYPES.SELECT:
            return (
                <SelectField
                    data={
                        domain &&
                            domain.map(text => ({
                                id: text,
                                text,
                            }))
                    }
                    {...props}
                />
            );
        case TYPES.TEXT_AREA:
            return <TextInput multiLine={true} {...props} />;
        case TYPES.DATE:
            return <DatePicker {...props} />;
        case TYPES.AUTO_COMPLETE:
            return <AutoComplete data={domain} {...props} />;
        default:
            return <TextInput {...props} />;
    }
};

export default InputSwitcher;
