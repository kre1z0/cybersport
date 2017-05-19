import React from 'react';

import ControlItem from './ControlItem';
import {
    RedoIcon,
    UndoIcon,
    AddIcon,
    ClearFiltersIcon,
    SettingsIcon,
    DownloadIcon,
    UploadIcon,
} from '../icons';

import { coolGreyTwo, steeGrey } from '../../assets/theme';
import './HeaderTitleBlock.scss';

const iconsStyle = {
    width: '16px',
    height: '16px',
    color: coolGreyTwo,
};

const HeaderTitleBlock = ({
    title,
    onSettingsClick,
    onNewObjectClick,
    onClearFilterClick,
}) => (
    <div className="header-title-block">
        <h2 className="title">{title}</h2>

        <div className="controls">

            <div className="section">
                <ControlItem
                    icon={
                        <UndoIcon
                            style={{ ...iconsStyle, height: '10px' }}
                            hoverColor={steeGrey}
                        />
                    }
                />
                <ControlItem
                    icon={
                        <RedoIcon
                            style={{ ...iconsStyle, height: '10px' }}
                            hoverColor={steeGrey}
                        />
                    }
                    disabled
                />
            </div>

            <div className="section">
                <ControlItem
                    icon={<AddIcon style={iconsStyle} hoverColor={steeGrey} />}
                    onTouchTap={onNewObjectClick}
                />
                <ControlItem
                    icon={
                        <ClearFiltersIcon
                            style={{ ...iconsStyle, height: '14px' }}
                            hoverColor={steeGrey}
                        />
                    }
                    onTouchTap={onClearFilterClick}
                />
                <ControlItem
                    icon={
                        <SettingsIcon
                            style={{ ...iconsStyle, height: '14px' }}
                            hoverColor={steeGrey}
                        />
                    }
                    onTouchTap={onSettingsClick}
                />
            </div>

            <div className="section">
                <ControlItem
                    icon={
                        <UploadIcon style={iconsStyle} hoverColor={steeGrey} />
                    }
                />
                <ControlItem
                    icon={
                        <DownloadIcon
                            style={iconsStyle}
                            hoverColor={steeGrey}
                        />
                    }
                />
            </div>

        </div>
    </div>
);

export default HeaderTitleBlock;
