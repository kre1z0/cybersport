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
        data: PropTypes.arrayOf(PropTypes.string),
        value: PropTypes.string,
        onChange: PropTypes.func
    };

    static defaultProps = {
        data: [],
        value: ''
    };

    state = {
        filteredData: [],
        focused: false,
        blockFocus: false
    };

    filterData(value){
        const result = value === ''
                            ? []
                            : this.props.data
                                    .filter(item => item.toLowerCase().search(value.toLowerCase()) !== -1);
        return result;
    }

    handleUpdateInput = (value) => {
        this.setState({
            filteredData: this.filterData(value)

        });

        if(this.props.onChange) {
            this.props.onChange(value)
        }
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
        const { filteredData, focused } = this.state;
        const { value } = this.props;

        return (
            <div className="auto-complete-input">
                <AutoComplete
                    animated={false}
                    hintText=" "
                    dataSource={filteredData}
                    dataSourceConfig={{ text: 'text', value: 'id'}}
                    onUpdateInput={this.handleUpdateInput}
                    fullWidth={true}
                    underlineShow={false}
                    style={styles.ROOT}
                    textFieldStyle={styles.INPUT}
                    menuStyle={styles.MENU}
                    openOnFocus={true}
                    listStyle={styles.MENU_LIST}
                    className={`text-input ${focused ? 'focused' : ''}`}
                    menuProps={{
                        menuItemStyle: styles.MENU_ITEM
                    }}
                    searchText={value}
                    onFocus={this.handleFocus}
                    onBlur={this.handleBlur}
                    onKeyDown={this.handleKeyDown}
                    onNewRequest={this.handleSelectItem}
                    menuCloseDelay={0}
                />
            </div>
        );
    }
}

export default AutoCompleteInput;