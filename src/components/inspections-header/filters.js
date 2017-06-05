import React from 'react';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';
import InspectionFilterItem from './inspection-filter-item';
import Select from '../../components/noMUI/select';
import DateInput from '../../components/noMUI/date-input';

const Filters = ({ collapsed }) => (
    <CSSTransitionGroup
        transitionEnterTimeout={500}
        transitionLeaveTimeout={300}
        transitionName="inspection-filter"
    >
        {collapsed &&
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
                            <DateInput
                                libProps={{
                                    popoverAttachment: 'bottom left',
                                    popoverTargetAttachment: 'top left',
                                    popoverTargetOffset: '10px -35px',
                                }}
                            />
                            <DateInput
                                libProps={{
                                    popoverAttachment: 'bottom center',
                                    popoverTargetAttachment: 'top center',
                                    popoverTargetOffset: '10px -35px',
                                }}
                            />
                        </div>
                    }
                    label="Период:"
                />
            </div>}
    </CSSTransitionGroup>
);

export default Filters;
