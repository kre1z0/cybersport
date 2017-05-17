import React from 'react';
import Checkbox  from 'material-ui/Checkbox'

const LayersListItem = ({ backgroundColor, boxShadowColor, imgSrc, label, checked, onChange, layerNumber }) => {
    const balun = (
    <div className="balun" style={{
      backgroundColor: backgroundColor,
      boxShadow: `0px 2px 4px 0 ${boxShadowColor}`
    }} >
      <div className="circle" />
    </div>
  )
  const img = (
    <img className='pin' src={imgSrc} alt="pin" />
  )

  return (
    <div className="layers-list-item" >
      <div className='checkbox-wrapper' >
        <Checkbox onCheck={(e, checked) => {onChange({layerNumber, checked})}} checked={checked} iconStyle={{ margin: 0 }} />
      </div>
      {imgSrc === undefined ? balun : img}
      <div className="label" >
        {label}
      </div>
    </div>
  )
}

export default LayersListItem;