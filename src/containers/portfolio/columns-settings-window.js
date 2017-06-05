import React, { Component } from 'react';
import PropTypes from 'prop-types';

import ModalWindow from '../../components/modal-window';
import RoundedButton from '../../components/button/rounded-button';
import ColumnsSettings from '../../components/columns-settings';

class ColumnsSettingsContainer extends Component {
    static propTypes = {
        open: PropTypes.bool,
        initAttributes: PropTypes.object,
        onApply: PropTypes.func,
        onRequestClose: PropTypes.func,
    };

    state = {
        attributes: this.props.initAttributes,
    };

    onChange = ({ index, attribute, value }) => {
        this.setState(({ attributes }) => ({
            attributes: attributes.updateIn([index, attribute], () => value),
        }));
    };

    onApply = () => {
        const { onRequestClose, updateAttributes } = this.props;
        const { attributes } = this.state;
        updateAttributes && updateAttributes(attributes);
        onRequestClose && onRequestClose();
    };

    render() {
        const { open, onRequestClose, title } = this.props;
        const { attributes } = this.state;

        return (
            <ModalWindow
                title={title}
                open={open}
                actions={
                    <div>
                        <RoundedButton
                            label="Отменить"
                            onTouchTap={onRequestClose}
                        />
                        <RoundedButton
                            label="Сохранить"
                            onTouchTap={this.onApply}
                            primary={true}
                        />
                    </div>
                }
                onRequestClose={onRequestClose}
            >
                <ColumnsSettings
                    data={attributes.toJS()}
                    onChange={this.onChange}
                />
            </ModalWindow>
        );
    }
}

export default ColumnsSettingsContainer;
