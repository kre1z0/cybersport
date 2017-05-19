import React from 'react';
import FlatButtonUI from 'material-ui/FlatButton';
import { coolGreyTwo, dustyOrange } from '../../assets/theme';

const FlatButton = ({ secondary, ...props }) => (
    <FlatButtonUI
        {...props}
        hoverColor="transparent"
        labelStyle={{
            color: secondary ? dustyOrange : coolGreyTwo,
            fontWeight: 300,
            textTransform: 'none',
        }}
    />
);

export default FlatButton;
