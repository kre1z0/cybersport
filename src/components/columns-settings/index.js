import React, {Component, PropTypes} from 'react';
import ColumnsSettingsItem from './columns-settings-item';
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
            <ColumnsSettingsItem
              key={name}
              alias={alias}
              isVisible={isVisible}
            />
          )
        })}
      </div>
    )
  }
}

export default ColumnsSettings;
