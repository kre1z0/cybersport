import React, { Component } from 'react';
import classNames from 'classnames';
import './new-object-window.scss';
import InputSwitcher, {TYPES} from './input-switcher'

class NewObjectWindow extends Component {
  render() {
    const { data } = this.props;
    return (
      <form className="new-object-window">
        {data.map(({name, alias, editorType}) => {

          const fieldGroup = classNames('field-group',
            { top: editorType === TYPES.TEXT_AREA || editorType === TYPES.IMG });

          return (
            <div className={fieldGroup} key={name}>
              <label>{alias}</label>
              <div className="input-wrapper">
                <InputSwitcher type={editorType} />
              </div>
            </div>
          )
        })}
      </form>
    )
  }
}

export default NewObjectWindow;
