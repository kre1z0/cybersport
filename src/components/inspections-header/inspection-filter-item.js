import React from 'react';

const InspectionFilterItem = ({ label, element }) => (
    <div className="inspection-filter-item">
        <span className="label">{label}</span>
        {element}
    </div>
);

export default InspectionFilterItem;
