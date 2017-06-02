import React from 'react';
import ControlItem from '../header-title-block/ControlItem';
import { RedoIcon, UndoIcon, AddIcon, FilterIcon } from '../icons';
import RoundedButton from '../../components/button/rounded-button';
import { coolGreyTwo, steeGrey } from '../../assets/theme';

const iconsStyle = {
    width: '16px',
    height: '16px',
    color: coolGreyTwo,
};

const primaryButtonStyle = {
    width: 178,
    margin: 0,
    boxShadow: 'none',
    border: 'none',
};

const labelPrimaryButtonStyle = {
    padding: 0,
    textTransform: 'none',
    fontWeight: 500,
};

const Control = ({ activeTabId, collapsed, handleCollapse }) => (
    <div className="inspections-control">
        {activeTabId === 2
            ? <RoundedButton
                  style={primaryButtonStyle}
                  labelStyle={labelPrimaryButtonStyle}
                  label="Сформировать план"
                  primary={true}
              />
            : null}
        <div className="section">
            <ControlItem
                icon={
                    <UndoIcon
                        disabled={false}
                        style={{ ...iconsStyle, height: '10px' }}
                        hoverColor={steeGrey}
                    />
                }
            />
            <ControlItem
                icon={
                    <RedoIcon
                        disabled={true}
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
            />
            <ControlItem
                onTouchTap={handleCollapse}
                icon={<FilterIcon style={iconsStyle} isActive={collapsed} />}
            />
        </div>
    </div>
);

export default Control;
