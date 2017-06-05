/**
 * Created by re on 15.05.2017.
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import './AutoComplete.scss';

import TextInput from '../text-input';

const Item = ({ item, onClick, selected }) => {
    return (
        <div
            onClick={() => {
                onClick(item.value);
            }}
            className={cn('item', { selected })}
            dangerouslySetInnerHTML={{ __html: item.text }}
        />
    );
};

const ItemList = ({ items, onSelect, selectItemIndex, className }) => {
    return (
        <div className={cn('item-list', className)}>
            {items.map((item, index) => (
                <Item
                    onClick={onSelect}
                    selected={selectItemIndex === index}
                    key={item.value}
                    item={item}
                />
            ))}
        </div>
    );
};

class AutoComplete extends Component {
    static defaultProps = {
        values: [],
    };

    state = {
        items: [],
        selectItemIndex: -1,
    };

    onSelect = value => {
        this.props.onChange(value);
        this.setState({
            items: [],
        });
    };

    onChange = value => {
        const { onChange, values } = this.props;
        onChange && onChange(value);
        this.setState({
            items: value
                ? values
                      .filter(
                          item =>
                              item &&
                              item.toLowerCase().search(value.toLowerCase()) !==
                                  -1,
                      )
                      .map(item => ({
                          value: item,
                          text: item.replace(value, `<b>${value}</b>`),
                      }))
                : [],
        });
    };

    keyUp = e => {
        const code = e.keyCode;
        const { selectItemIndex, items } = this.state;

        // UP
        if (code === 38) {
            e.preventDefault();
            if (selectItemIndex === 0) return;
            this.setState({
                selectItemIndex: selectItemIndex - 1,
            });
            return;
        }
        // DOWN
        if (code === 40) {
            e.preventDefault();
            if (selectItemIndex === items.length - 1) return;
            this.setState({
                selectItemIndex: selectItemIndex + 1,
            });
            return;
        }
        // ENTER
        if (code === 13) {
            e.preventDefault();
            items[selectItemIndex] &&
                this.onSelect(items[selectItemIndex].value);
        }
    };

    componentDidMount() {
        window.addEventListener('click', this.handleDocumentClick);
    }

    componentWillUnmount() {
        window.removeEventListener('click', this.handleDocumentClick);
    }

    handleDocumentClick = e => {
        const inside = this.el.contains(e.target);
        if (!inside) {
            this.setState({
                items: [],
            });
        }
    };

    static propTypes = {
        values: PropTypes.array,
        value: PropTypes.string,
        onChange: PropTypes.func,
        className: PropTypes.string,
        style: PropTypes.object,
        itemListClassName: PropTypes.string,
    };

    render() {
        const { value, className, style, itemListClassName } = this.props;
        const { items, selectItemIndex } = this.state;

        const mergedClassName = cn('sberAutoComplete', className);

        return (
            <div
                ref={el => (this.el = el)}
                className={mergedClassName}
                style={style}
            >
                <TextInput
                    style={{ width: '100%' }}
                    onChange={this.onChange}
                    value={value}
                    inputProps={{ onKeyDown: this.keyUp }}
                />
                <ItemList
                    className={itemListClassName}
                    onSelect={this.onSelect}
                    selectItemIndex={selectItemIndex}
                    items={items}
                />
            </div>
        );
    }
}

export default AutoComplete;
