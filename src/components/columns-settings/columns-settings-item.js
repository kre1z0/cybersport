import React from 'react';
import IconButton from 'material-ui/IconButton';
import { DragIcon, ViewIcon } from '../icons';

const ViewIconStyle = {
    width: 16,
    height: 11,
};

const ViewButtonStyle = {
    width: 27,
    height: 27,
    padding: 0,
};

const ColumnsSettingsItem = ({
    alias,
    isVisible,
    index,
    onVisibilityChange,
    ...props
}) => (
    <div className="columns-settings-item">
        <div className="columns-settings-dnd">
            <DragIcon style={{ height: '0.785rem' }} />
        </div>
        <div className="columns-settings-ico">
            <IconButton
                style={ViewButtonStyle}
                iconStyle={ViewIconStyle}
                onTouchTap={() => onVisibilityChange(index, !isVisible)}
            >
                <ViewIcon isVisible={isVisible} />
            </IconButton>
        </div>
        <div className="columns-settings-title">
            {alias}
        </div>
    </div>
);

export default ColumnsSettingsItem;
