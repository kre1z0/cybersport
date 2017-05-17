/**
 * Created by re on 15.05.2017.
 */
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import './TextInput.scss';

class TextInput extends Component {
    static propTypes = {
        className: PropTypes.string,
        wrapperClassName: PropTypes.string,
        value: PropTypes.string,
        style: PropTypes.object,
        wrapperStyle: PropTypes.object
    };

    onChange = ({target}) => {
        const { onChange } = this.props;

        onChange && onChange(target.value)
    };

    render(){
        const { focus, value, className, wrapperClassName, style, wrapperStyle, onKeyDown, onKeyUp, ...otherProps } = this.props;

        const mergedClassName = cn("sberTextInput", className);
        const mergedWrapperClassName = cn("sberTextInputWrapper", wrapperClassName);

        return <div className={mergedWrapperClassName} style={wrapperStyle}>
            <input
                {...otherProps}
                ref={input => input && focus && input.focus()}
                className={mergedClassName}
                style={style}
                type="text"
                value={value}
                onChange={this.onChange}
                onKeyDown={onKeyDown}
                onKeyUp={onKeyUp}
            />
        </div>
    }
}

export default TextInput