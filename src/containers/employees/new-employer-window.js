import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import classNames from 'classnames';

import InputSwitcher, {
    TYPES,
} from '../../components/new-object-window/input-switcher';
import ModalWindow from '../../components/modal-window';
import RoundedButton from '../../components/button/rounded-button';

class NewEmployerWindow extends Component {
    static propTypes = {
        show: PropTypes.bool,
        onHide: PropTypes.func,
        data: PropTypes.array,
    };

    onApply = () => {};

    render() {
        const { show, onHide, data } = this.props;
        return (
            <ModalWindow
                title="Новый сотрудник"
                open={show}
                onRequestClose={onHide}
            >
                <form className="new-object-window">
                    {data.map(({ name, alias, type }) => {
                        const fieldGroup = classNames('field-group', {
                            top: type === TYPES.TEXT_AREA || type === TYPES.IMG,
                        });

                        return (
                            <div className={fieldGroup} key={name}>
                                <label>{alias}</label>
                                <div className="input-wrapper">
                                    <InputSwitcher type={type} />
                                </div>
                            </div>
                        );
                    })}
                </form>
            </ModalWindow>
        );
    }
}

export default NewEmployerWindow;
