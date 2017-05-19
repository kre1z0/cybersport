import React, {Component} from 'react';
import PropTypes from 'prop-types';
import ColumnsSettingsItem from './columns-settings-item';
import './columns-settings.scss';

class ColumnsSettings extends Component {
    static propTypes = {
        data: PropTypes.array,
        onChange: PropTypes.func
    };
    
    changeVisibility = (index, value) => {
        const {onChange} = this.props;
        onChange && onChange({index, value, attribute: 'isVisible'});
    };
    
    render () {
        const {data} = this.props;
        return (
            <div className="columns-settings">
                {data.map(({name, type, alias, isVisible}, i) => {
                    return (type !== 'control' ?
                        <ColumnsSettingsItem
                            key={name}
                            alias={alias}
                            isVisible={isVisible}
                            index={i}
                            onVisibilityChange={this.changeVisibility}
                        /> : null
                    )
                })}
            </div>
        )
    }
}

export default ColumnsSettings;
