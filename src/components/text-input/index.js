import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';
import TextField from 'material-ui/TextField';
import {darkGrey} from '../../assets/theme';

import "./TextInput.scss";

const styles = {
    ROOT: {
        width: '100%',
        fontSize: '1rem',
        height: '100%',
        lineHeight: 'inherit',
        paddingLeft: '12px',
        paddingRight: '12px'
    },
    TEXTAREA: {
        margin: '0',
        color: darkGrey
    },
    INPUT: {
        margin: '0',
        color: darkGrey
    }
};

class TextArea extends Component {
    static propTypes = {
        className: PropTypes.string,
        value: PropTypes.string,
        onChange: PropTypes.func,
        multiLine: PropTypes.bool,

        style: PropTypes.object,
        inputStyle: PropTypes.object,
        textAreaStyle: PropTypes.object,

        focusOnMount: PropTypes.bool,
        onBlur: PropTypes.func
    };

    static defaultProps = {
        multiLine: false
    };

    state = {
        focused: false
    };

    handlerFocus = () => {
        this.setState({focused: true})
    };

    handleBlur = () => {
        const {onBlur} = this.props;
        this.setState({focused: false});
        onBlur && onBlur();
    };

    handlerChange = ({target}) => {
        const {onChange} = this.props;
        onChange && onChange(target.value);
    };

    componentDidMount(){
        const { focusOnMount } = this.props;
        focusOnMount && this.setState({
            focused: true
        })
    }

    render(){
        const { className, multiLine, value, style, inputStyle, textAreaStyle, focusOnMount, ...other } = this.props;
        const { focused } = this.state;

        const mergedClassName = classNames('text-input', className, {focused});
        return (
            <div className={mergedClassName}>
                <TextField
                    {...other}
                    hintText=" "
                    floatingLabelText={false}

                    multiLine={multiLine}

                    underlineShow={false}
                    value={value}

                    ref={input => input && focused && input.focus()}
                    onChange={this.handlerChange}
                    onFocus={this.handlerFocus}
                    onBlur={this.handleBlur}
                    style={{...styles.ROOT, ...style}}
                    textareaStyle={{...styles.TEXTAREA, ...textAreaStyle}}
                    inputStyle={{...styles.INPUT, ...inputStyle}}
                />
            </div>
        )
    }
}

export default TextArea;