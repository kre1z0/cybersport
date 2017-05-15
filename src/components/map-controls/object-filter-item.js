import React from 'react';

const ObjectFilterItem = ({ element, label }) => {
  return (
    <div className='object-filter-item'>
      <div className="label">
        {label}
      </div>
      {element}
    </div>
  )
}

export default ObjectFilterItem;