import React, {Component, PropTypes} from 'react';
import { connect } from 'react-redux';
import {addObject} from '../../ducks/objects';

import ModalWindow from '../../components/modal-window';
import RoundedButton from '../../components/button/rounded-button';
import NewObjectWindow from '../../components/new-object-window/new-object-window';

const NEW_OBJECT_COLUMNS = [
    'control',
    'object_name',
    'address_adjusted',
    'planned_audit_date',
    'gid'
];

class NewObjectWindowContainer extends Component {
    static propTypes = {
        open: PropTypes.bool,
        attributes: PropTypes.array,
        onApply: PropTypes.func,
        onRequestClose: PropTypes.func
    };
    
    state = {
        object: {}
    };
    
    onChange = (name, value) => {
        this.setState(({object}) => ({
            object: {
                ...object,
                [name]: value.id === undefined ? value : value.id
            }
        }))
    };
    
    onApply = () => {
        const {addObject, onRequestClose} = this.props;
        const {object} = this.state;
        
        addObject(object)
            .then(response => onRequestClose())
            .catch(error => console.log(error));
    };
    
    render () {
        const {open, objects, onRequestClose} = this.props;
        const {object} = this.state;
        
        const attributes = objects.attributes.toJS();
        
        return (
            <ModalWindow title="Новый объект"
                         open={open}
                         actions={(
                             <div>
                                 <RoundedButton label="Отменить"
                                                onTouchTap={onRequestClose}
                                 />
                                 <RoundedButton label="Сохранить"
                                                onTouchTap={this.onApply}
                                                primary={true}
                                 />
                             </div>
                         )}
                         onRequestClose={onRequestClose}
            >
                <NewObjectWindow data={attributes.filter(({name})=>!NEW_OBJECT_COLUMNS.includes(name))}
                                 object={object}
                                 onChange={this.onChange}
                />
            </ModalWindow>
        )
    }
}
const mapProps = ({objects}) => ({
    objects
});

const mapActions = {
    addObject
};

export default connect(mapProps, mapActions)(NewObjectWindowContainer);
