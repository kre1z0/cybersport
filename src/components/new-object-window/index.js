import React, { Component } from 'react';
import classNames from 'classnames';
import './new-object-window.scss'
import TextInput from '../text-input'
import SelectField from '../select-field'
import ImageLoader from '../img-loader'

class newObjectWindow extends Component {
  constructor(props){
    super(props)
  }
  render() {
    const { data } = this.props;
    return (
      <form className="new-object-window">
        {data.map(({name, alias, type}) => {
          let input;
          if (type === 'text' || type === 'address') input = (<TextInput />);
          else if (type === 'select') input = (<SelectField />);
          else if (type === 'text-area') input = (<TextInput multiLine={true}/>);
          else if (type === 'text-string') input = (<div className="new-object-id">000003</div>);
          else if (type === 'img') input = (<ImageLoader />);

          const fieldGroup = classNames('field-group',
            { top: type === 'text-area' || type === 'img' });

          return (
            <div className={fieldGroup} key={name}>
              <label>{alias}</label>
              <div className="input-wrapper">
                {input}
              </div>
            </div>
          )
        })}
      </form>
    )
  }
}

export default newObjectWindow;
