import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';
import TextField from 'material-ui/TextField';

import "./TextInput.scss";

const styles = {
    ROOT: {
        width: '100%',
        fontSize: '1rem',
        height: '30px',
        lineHeight: '30px',
        paddingLeft: '12px',
        paddingRight: '12px'
    },
    TEXTAREA: {
        margin: '0'
    },
    INPUT: {
        margin: '0'
    }
};

class TextArea extends Component {
    static propTypes = {
        className: PropTypes.string,
        value: PropTypes.string,
        onChange: PropTypes.func,
        multiLine: PropTypes.bool
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
        this.setState({focused: false})
    };

    handlerChange = (e, value) => {
        const {onChange} = this.props;

        onChange && onChange(value);
    };

    render(){
        const { className, multiLine, ...other } = this.props;
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

                    onChange={this.handlerChange}
                    onFocus={this.handlerFocus}
                    onBlur={this.handleBlur}
                    style={styles.ROOT}
                    textareaStyle={styles.TEXTAREA}
                    inputStyle={styles.INPUT}
                />
            </div>
        )
    }
}

export default TextArea;