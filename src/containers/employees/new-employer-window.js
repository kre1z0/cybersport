import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import classNames from 'classnames';
import { addEmployer, createError } from '../../ducks/employees';

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

    state = {
        employer: {},
    };

    onApply = () => {
        const { addEmployer, createError, onHide } = this.props;
        const { employer } = this.state;

        console.log(employer);

        addEmployer(employer, this.images)
            .then(response => onHide())
            .catch(error => createError(error));
    };

    onChange = (name, value) => {
        if (name === 'image_name') {
            this.images = value;
        } else {
            this.setState(({ employer }) => ({
                employer: {
                    ...employer,
                    [name]: value.id === undefined ? value : value.id,
                },
            }));
        }
    };

    render() {
        const { show, onHide, data, domains } = this.props;
        const { employer } = this.state;
        return (
            <ModalWindow
                title="Новый сотрудник"
                open={show}
                onRequestClose={onHide}
                actions={
                    <div>
                        <RoundedButton label="Отменить" onTouchTap={onHide} />
                        <RoundedButton
                            label="Сохранить"
                            onTouchTap={this.onApply}
                            primary={true}
                        />
                    </div>
                }
            >
                <form className="new-object-window">
                    {data.map(({ name, alias, editorType }) => {
                        const fieldGroup = classNames('field-group', {
                            top: editorType === TYPES.TEXT_AREA ||
                                editorType === TYPES.IMG,
                        });

                        return (
                            <div className={fieldGroup} key={name}>
                                <label>{alias}</label>
                                <div className="input-wrapper">
                                    <InputSwitcher
                                        type={editorType}
                                        domain={
                                            domains.get(
                                                name === 'office_address_region'
                                                    ? 'address_region'
                                                    : name,
                                            ) &&
                                                domains
                                                    .get(
                                                        name ===
                                                            'office_address_region'
                                                            ? 'address_region'
                                                            : name,
                                                    )
                                                    .toJS()
                                        }
                                        value={employer[name]}
                                        onChange={value =>
                                            this.onChange(name, value)}
                                    />
                                </div>
                            </div>
                        );
                    })}
                </form>
            </ModalWindow>
        );
    }
}

const mapProps = ({ domains }) => ({ domains });

const mapActions = {
    addEmployer,
    createError,
};

export default connect(mapProps, mapActions)(NewEmployerWindow);
