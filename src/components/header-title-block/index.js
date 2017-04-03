import React from 'react';

import ControlItem from './ControlItem';
import {RedoIcon, UndoIcon, AddIcon, ClearFiltersIcon, SettingsIcon, DownloadIcon, UploadIcon} from '../icons';

import {coolGreyTwo, steeGrey} from '../../assets/theme'
import './HeaderTitleBlock.css';

const iconsStyle = {
    width: '16px',
    height: '16px',
    color: coolGreyTwo
};

const HeaderTitleBlock = ({title}) => (

    <div className="header-title-block">
        <h2 className="title">{title}</h2>

        <div className="controls">

            <div className="section">
                <ControlItem
                    icon={<UndoIcon style={{...iconsStyle, height: '10px'}} hoverColor={steeGrey} />}
                />
                <ControlItem
                    icon={<RedoIcon style={{...iconsStyle, height: '10px'}} hoverColor={steeGrey} />}
                    disabled
                />
            </div>

            <div className="section">
                <ControlItem
                    icon={<AddIcon style={iconsStyle} hoverColor={steeGrey} />}
                />
                <ControlItem
                    icon={<ClearFiltersIcon style={{...iconsStyle, height: '14px'}} hoverColor={steeGrey} />}
                />
                <ControlItem
                    icon={<SettingsIcon style={{...iconsStyle, height: '14px'}} hoverColor={steeGrey} />}
                />
            </div>

            <div className="section">
                <ControlItem
                    icon={<UploadIcon style={iconsStyle} hoverColor={steeGrey} />}
                />
                <ControlItem
                    icon={<DownloadIcon style={iconsStyle} hoverColor={steeGrey} />}
                />
            </div>

        </div>
    </div>

);


export default HeaderTitleBlock;
