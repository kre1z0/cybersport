import React from 'react';

const ObjectPhotoItem = ({ alias, content }) => {
    return content
        ? <div className="object-photo-item">
              <div className="object-photo-item-title">
                  {alias}
              </div>
              <div className="object-photo-item-content">
                  {content}
              </div>
          </div>
        : null;
};

export default ObjectPhotoItem;
