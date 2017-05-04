import React, {Component, PropTypes} from 'react';
import ModalWindow from '../../components/modal-window';
import RoundedButton from '../../components/button/rounded-button';
import ColumnsSettings from '../../components/columns-settings';

class NewObjectWindowContainer extends Component {
    static propTypes = {
        open: PropTypes.bool,
        attributes: PropTypes.array,
        onApply: PropTypes.func,
        onRequestClose: PropTypes.func
    };
    
    render () {
        const {open, attributes, onRequestClose, onApply} = this.props;
        
        return (
            <ModalWindow title="Новый объект"
                         open={open}
                         actions={(
                             <div>
                                 <RoundedButton label="Отменить"
                                                onTouchTap={onRequestClose}
                                 />
                                 <RoundedButton label="Сохранить"
                                                onTouchTap={onApply}
                                                primary={true}
                                 />
                             </div>
                         )}
                         onRequestClose={onRequestClose}
            >
                <ColumnsSettings data={attributes}/>
            </ModalWindow>
        )
    }
}

export default NewObjectWindowContainer;

