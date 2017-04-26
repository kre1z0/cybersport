import React, { Component } from 'react';
import classNames from 'classnames';
import './new-object-window.scss';
import InputSwitcher, {TYPES} from './input-switcher'

class NewObjectWindow extends Component {
  render() {
    const { data } = this.props;
    return (
      <form className="new-object-window">
        {data.map(({name, alias, type}) => {

          const fieldGroup = classNames('field-group',
            { top: type === TYPES.TEXT_AREA || type === TYPES.IMG });

          return (
            <div className={fieldGroup} key={name}>
              <label>{alias}</label>
              <div className="input-wrapper">
                <InputSwitcher type={type} />
              </div>
            </div>
          )
        })}
      </form>
    )
  }
}

export default NewObjectWindow;
