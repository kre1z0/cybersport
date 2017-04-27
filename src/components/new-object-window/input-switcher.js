import React from 'react';
import TextInput from '../text-input'
import SelectField from '../select-field'
import ImageLoader from '../img-loader'

export const TYPES = {
  TEXT_STRING: 'text-string',
  TEXT: 'text',
  ADDRESS: 'address',
  TEXT_AREA: 'text-area',
  SELECT: 'select',
  IMG: 'img'
};

const InputSwitcher = ({type, ...props}) => {
  switch (type) {
    case TYPES.TEXT_STRING: return <div className="new-object-id">000003</div>;
    case TYPES.IMG: return <ImageLoader {...props}/>;
    case TYPES.TEXT: return <TextInput {...props}/>;
    case TYPES.SELECT: return <SelectField {...props}/>;
    case TYPES.TEXT_AREA: return <TextInput multiLine={true} {...props}/>;
    default: return <TextInput {...props}/>;
  }
};

export default InputSwitcher;
