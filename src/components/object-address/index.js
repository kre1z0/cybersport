import React, {Component, PropTypes} from 'react';
import Map from '../map'
import ObjectAddressItem from './object-address-item'
import './object-address.scss'

class ObjectAddress extends Component {
  static propTypes = {
    attr: PropTypes.array,
    object: PropTypes.object,
  };

  render() {
    const {attr, object} = this.props;
    return (
      <div className="object-address">
        <div className="object-address-map">
          <Map center={[4191452.3430594765, 7499156.532455107]} resolution={152.87405657031263}/>
        </div>
        <div className="object-address-footer">

          {attr.map(({name, alias, editorType, isEditable}) => {
            return (
              <ObjectAddressItem key={name}
                                 alias={alias}
                                 editorType={editorType}
                                 isEditable={isEditable}
                                 name={name}
                                 object={object}
              />
            )
          })}
        </div>
      </div>
    )
  }
}

export default ObjectAddress;
