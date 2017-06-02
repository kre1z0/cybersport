import React from 'react';

const PlanTitleItem = ({ color, title }) => (
    <div
        className="employes-header-title"
        style={{
            color: color,
        }}
    >
        {title}
    </div>
);

export default PlanTitleItem;
