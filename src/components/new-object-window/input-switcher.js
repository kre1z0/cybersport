import React from 'react';
import TextInput from '../text-input'
import SelectField from '../select-field'
import ImageLoader from '../img-loader'
import DatePicker from '../date-picker';

export const TYPES = {
    TEXT: 'text',
    NUMBER: 'number',
    ADDRESS: 'address',
    TEXT_AREA: 'text-area',
    SELECT: 'select',
    IMG: 'img-loader',
    DATE: 'date'
};

const InputSwitcher = ({type, data, ...props}) => {
    switch (type) {
        case TYPES.IMG:
            return <ImageLoader {...props}/>;
        case TYPES.TEXT:
            return <TextInput {...props}/>;
        case TYPES.ADDRESS:
            return <TextInput {...props}/>;
        case TYPES.NUMBER:
            return <TextInput {...props}/>;
        case TYPES.SELECT:
            return <SelectField data={data}
                                {...props}
                   />;
        case TYPES.TEXT_AREA:
            return <TextInput multiLine={true}
                              {...props}
                   />;
        case TYPES.DATE:
            return <DatePicker {...props}/>;
        default:
            return <div className="new-object-id">{props.value}</div>;
    }
};

export default InputSwitcher;
