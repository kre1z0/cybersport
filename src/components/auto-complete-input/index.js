import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import AutoComplete from 'material-ui/AutoComplete';

import './AutoCompleteInput.scss';

const styles = {
    ROOT: {
        fontSize: '1rem',
    },
    INPUT: {
        fontSize: 'inherit',
        padding: '0 0.8571rem',
        lineHeight: '2.286rem',
        height: '2.286rem',
    },
    MENU: {
        maxHeight: '200px',
        overflowY: 'auto',
        overflowX: 'hidden',
    },
    MENU_LIST: { paddingTop: '0px', paddingBottom: '0px' },
    MENU_ITEM: {
        fontSize: '',
        lineHeight: '2.286rem',
        minHeight: 'inherit',
        display: 'flex',
        alignItems: 'center',
    },
};

class AutoCompleteInput extends Component {
    static propTypes = {
        data: PropTypes.arrayOf(PropTypes.string),
        value: PropTypes.string,
        className: PropTypes.string,

        style: PropTypes.object,
        menuStyle: PropTypes.object,
        listStyle: PropTypes.object,
        itemStyle: PropTypes.object,

        focusOnMount: PropTypes.bool,

        onChange: PropTypes.func,
        onBlur: PropTypes.func,
    };

    static defaultProps = {
        data: [],
    };

    state = {
        filteredData: [],
        focused: false,
        blockFocus: false,
    };

    filterData(value) {
        const result = value === '' || !this.props.data
            ? []
            : this.props.data.filter(
                  item => item.toLowerCase().search(value.toLowerCase()) !== -1,
              );
        return result;
    }

    handleUpdateInput = value => {
        const { onChange } = this.props;
        this.setState({
            filteredData: this.filterData(value),
        });

        onChange && onChange(value);
    };

    handleFocus = () => {
        this.setState({
            focused: true,
        });
    };

    handleBlur = () => {
        const { onBlur } = this.props;
        if (this.state.blockFocus) return;
        this.setState({
            focused: false,
        });
        onBlur && onBlur();
    };

    handleKeyDown = e => {
        this.setState({
            blockFocus: e.keyCode === 40,
        });
    };

    handleSelectItem = () => {
        this.setState({
            blockFocus: false,
            focused: false,
        });
    };

    componentDidMount() {
        this.props.focusOnMount &&
            this.setState({
                focused: true,
            });
    }

    render() {
        const { focused } = this.state;
        const {
            className,
            style,
            menuStyle,
            listStyle,
            itemStyle,
            value,
            data,
        } = this.props;
        const mergedClassName = cn('auto-complete-input', className);

        return (
            <div className={mergedClassName}>
                <AutoComplete
                    animated={false}
                    hintText=" "
                    dataSource={data || []}
                    dataSourceConfig={{ text: 'text', value: 'id' }}
                    onUpdateInput={this.handleUpdateInput}
                    fullWidth={true}
                    underlineShow={false}
                    style={styles.ROOT}
                    textFieldStyle={{ ...styles.INPUT, ...style }}
                    menuStyle={{ ...styles.MENU, ...menuStyle }}
                    listStyle={{ ...styles.MENU_LIST, ...listStyle }}
                    openOnFocus={true}
                    className={`text-input ${focused ? 'focused' : ''}`}
                    menuProps={{
                        className: 'auto-complete-menu',
                        menuItemStyle: {
                            ...styles.MENU_ITEM,
                            ...itemStyle,
                            ...{ height: (style && style.height) || 'auto' },
                        },
                    }}
                    ref={input => input && focused && input.focus()}
                    searchText={value}
                    onFocus={this.handleFocus}
                    onBlur={this.handleBlur}
                    onKeyDown={this.handleKeyDown}
                    onNewRequest={this.handleSelectItem}
                    menuCloseDelay={0}
                    filter={AutoComplete.caseInsensitiveFilter}
                />
            </div>
        );
    }
}

export default AutoCompleteInput;
