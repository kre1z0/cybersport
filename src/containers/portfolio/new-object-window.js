import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addObject, createError } from '../../ducks/objects';

import ModalWindow from '../../components/modal-window';
import RoundedButton from '../../components/button/rounded-button';
import NewObjectWindow
    from '../../components/new-object-window/new-object-window';

import classifierFull from '../../assets/const/classifier-full';

const NEW_OBJECT_COLUMNS = [
    'control',
    'object_name',
    'address_adjusted',
    'planned_audit_date',
    'gid',
];

const filterClassifierDomains = (object, domains, fields = [1, 2, 3, 4]) => {
    fields.forEach(i => {
        if (object['classifier' + i]) {
            domains['classifier' + (i + 1)] =
                classifierFull[object['classifier' + i]];
        } else {
            domains['classifier' + (i + 1)] = [];
        }
    });

    return domains;
};

class NewObjectWindowContainer extends Component {
    static propTypes = {
        open: PropTypes.bool,
        attributes: PropTypes.array,
        onApply: PropTypes.func,
        onRequestClose: PropTypes.func,
    };

    state = {
        object: {},
    };

    images = null;

    onChange = (name, value) => {
        if (name === 'image_name') {
            this.images = value;
        } else {
            this.setState(({ object }) => ({
                object: {
                    ...object,
                    [name]: value.id === undefined ? value : value.id,
                },
            }));
        }
    };

    onApply = () => {
        const { addObject, createError, onRequestClose } = this.props;
        const { object } = this.state;

        addObject(object, this.images)
            .then(response => onRequestClose())
            .catch(error => createError(error));
    };

    componentWillReceiveProps({ open }) {
        if (!this.props.open && open) {
            this.setState(state => ({
                object: {},
            }));
        }
    }

    render() {
        const { open, objects, domains, onRequestClose } = this.props;
        const { object } = this.state;

        const attributes = objects.attributes.toJS();

        return (
            <ModalWindow
                title="Новый объект"
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
                <NewObjectWindow
                    data={attributes.filter(
                        ({ name }) => !NEW_OBJECT_COLUMNS.includes(name),
                    )}
                    domains={filterClassifierDomains(object, domains.toJS())}
                    object={object}
                    onChange={this.onChange}
                />
            </ModalWindow>
        );
    }
}
const mapProps = ({ objects, domains }) => ({
    objects,
    domains,
});

const mapActions = {
    addObject,
    createError,
};

export default connect(mapProps, mapActions)(NewObjectWindowContainer);
