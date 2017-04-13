import React, {Component, PropTypes} from 'react';
import AutoComplete from 'material-ui/AutoComplete';

import './AutoCompleteInput.scss';

const styles = {
    ROOT: {
        fontSize: '1rem',
    },
    INPUT: {
        fontSize: 'inherit',
        height: '2.286rem',
        padding: '0 0.8571rem',
        lineHeight: '2.286rem'
    },
    MENU: {},
    MENU_LIST: {paddingTop: '0px', paddingBottom: '0px'},
    MENU_ITEM: {fontSize: '', lineHeight: '2.286rem', minHeight: 'inherit'}
};

class AutoCompleteInput extends Component {
    static propTypes = {
        data: PropTypes.arrayOf(PropTypes.shape({
            text: PropTypes.string
        }))
    };

    static defaultProps = {
        data: []
    };

    state = {
        data: [],
        focused: false,
        blockFocus: false
    };

    handleUpdateInput = (value) => {
        this.setState({
            data: value === '' ? [] : this.props.data
                                            .filter(item => item.text.toLowerCase().search(value.toLowerCase()) !== -1)

        })
    };

    handleFocus = () => {
        this.setState({
            focused: true
        })
    };

    handleBlur = () => {
        if(this.state.blockFocus) return;
        this.setState({
            focused: false
        })
    };

    handleKeyDown = (e) => {
        this.setState({
            blockFocus: e.keyCode === 40
        });
    };

    handleSelectItem = () => {
        this.setState({
            blockFocus: false,
            focused: false
        })
    };

    render() {
        return (
            <div className="auto-complete-input">
                <AutoComplete
                    hintText=" "
                    dataSource={this.state.data}
                    dataSourceConfig={{ text: 'text', value: 'id'}}
                    onUpdateInput={this.handleUpdateInput}
                    fullWidth={true}
                    underlineShow={false}
                    style={styles.ROOT}
                    textFieldStyle={styles.INPUT}
                    menuStyle={styles.MENU}
                    openOnFocus={true}
                    listStyle={styles.MENU_LIST}
                    className={`Input ${this.state.focused ? 'focused' : ''}`}
                    menuProps={{
                        menuItemStyle: styles.MENU_ITEM
                    }}
                    onFocus={this.handleFocus}
                    onBlur={this.handleBlur}
                    onKeyDown={this.handleKeyDown}
                    onNewRequest={this.handleSelectItem}
                />
            </div>
        );
    }
}

export default AutoCompleteInput;