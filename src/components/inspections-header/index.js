import React from 'react';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';
import TabItem from './tab-item';
import ControlItem from '../header-title-block/ControlItem';
import InspectionFilterItem from './inspection-filter-item';
import Select from '../../components/noMUI/select';
import DateInput from '../../components/noMUI/date-input';
import { RedoIcon, UndoIcon, AddIcon, FilterIcon } from '../icons';
import { coolGreyTwo, steeGrey } from '../../assets/theme';
import './inspection-header.scss';

const iconsStyle = {
    width: '16px',
    height: '16px',
    color: coolGreyTwo,
};

const InspectionsHeader = () => (
    <div className="inspections-header">
        <div className="inspections-tabs">
            <TabItem title="Задачи сотрудников" isActive={true} />
            <TabItem title="План на следующий месяц" />
        </div>
        <div className="inspections-control">
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
                    icon={<FilterIcon style={iconsStyle} isActive={true} />}
                />
            </div>
        </div>
        <CSSTransitionGroup
            transitionEnterTimeout={500}
            transitionLeaveTimeout={300}
            transitionName="inspection-filter"
        >
            <div className="inspection-filter">
                <InspectionFilterItem element={<Select />} label="TБ:" />
                <InspectionFilterItem element={<Select />} label="Сотрудник:" />
                <InspectionFilterItem
                    element={<Select />}
                    label="Тип мониторинга:"
                />
                <InspectionFilterItem
                    element={
                        <div className="date">
                            <DateInput />
                            <DateInput />
                        </div>
                    }
                    label="Период:"
                />
            </div>
        </CSSTransitionGroup>
    </div>
);

export default InspectionsHeader;
