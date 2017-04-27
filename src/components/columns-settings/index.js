import React, {Component, PropTypes} from 'react';
import DragIcon from '../icons/drag';
import ViewIcon from '../icons/view';
import './columns-settings.scss';

class ColumnsSettings extends Component {
  static propTypes = {
    data: PropTypes.array,
  };
  render() {
    const { data } = this.props;
    return (
      <div className="columns-settings">
        {data.map(({name, alias, isVisible}) => {
          return (
            <div className="columns-settings-item" key={name}>
              <div className="columns-settings-dnd">
                <DragIcon style={{height: '0.785rem'}} />
              </div>
              <div className="columns-settings-ico">
                <ViewIcon style={{height: '0.785rem'}} isVisible={isVisible} />
              </div>
              <div className="columns-settings-title">
                {alias}
              </div>
            </div>
          )
        })}
      </div>
    )
  }
}

export default ColumnsSettings;
