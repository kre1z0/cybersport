/**
 * Created by re on 15.05.2017.
 */
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import './TextInput.scss';

class TextInput extends Component {
    static propTypes = {
        value: PropTypes.string,
        className: PropTypes.string,
        wrapperClassName: PropTypes.string,
        style: PropTypes.object,
        wrapperStyle: PropTypes.object,
        inputProps: PropTypes.object,
        wrapperProps: PropTypes.object,
        onChange: PropTypes.func,

        focus: PropTypes.bool
    };

    onChange = ({target}) => {
        const { onChange } = this.props;
        onChange && onChange(target.value)
    };

    render(){
        const { focus, value, className, wrapperClassName, style, wrapperStyle, inputProps, wrapperProps } = this.props;

        const mergedClassName = cn("sberTextInput", className);
        const mergedWrapperClassName = cn("sberTextInputWrapper", wrapperClassName);

        return <div {...wrapperProps} className={mergedWrapperClassName} style={wrapperStyle}>
            <input
                {...inputProps}
                ref={input => input && focus && input.focus()}
                className={mergedClassName}
                style={style}
                type="text"
                value={value}
                onChange={this.onChange}
            />
        </div>
    }
}

export default TextInput