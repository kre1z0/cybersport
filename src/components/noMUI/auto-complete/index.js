/**
 * Created by re on 15.05.2017.
 */
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import './AutoComplete.scss';

import TextInput from '../text-input';

const Item = ({item, onClick, selected}) => {
    return <div onClick={() => {onClick(item.value)}} className={cn("item", {selected})} dangerouslySetInnerHTML={{__html: item.text}} />
};

const ItemList = ({items, onSelect, selectItemIndex}) => {
    return <div className="item-list">
        {items.map((item, index) => <Item onClick={onSelect} selected={selectItemIndex === index} key={item.value} item={item} />)}
    </div>
};

class AutoComplete extends Component {
    state = {
        items: [],
        selectItemIndex: -1
    };

    onSelect = (value) => {
        this.props.onChange(value);
        this.setState({
            items: []
        })
    };

    onChange = (value) => {
        const {onChange, values} = this.props;
        onChange && onChange(value);
        this.setState({
            items: value
                ? values
                    .filter(item => item.toLowerCase().search(value.toLowerCase()) !== -1)
                    .map(item => ({
                        value: item,
                        text: item.replace(value, `<b>${value}</b>`)
                    }))
                : []
        })
    };

    keyUp = (e) => {
        const code = e.keyCode;
        const { selectItemIndex, items } = this.state;

        if(code === 38) {
            e.preventDefault();
            if(selectItemIndex === 0) return;
            this.setState({
                selectItemIndex: selectItemIndex - 1
            });
            return;
        }
        if(code === 40) {
            e.preventDefault();
            if(selectItemIndex === items.length - 1) return;
            this.setState({
                selectItemIndex: selectItemIndex + 1
            });
            return;
        }
        if(code === 13) {
            e.preventDefault();
            this.onSelect(this.state.items[this.state.selectItemIndex].value);
        }
    };


    componentDidMount () {
        window.addEventListener('click', this.handleDocumentClick)
    }

    componentWillUnmount () {
        window.removeEventListener('click', this.handleDocumentClick)
    }

    handleDocumentClick = (e) => {
        const inside = this.el.contains(e.target);
        if(!inside){
            this.setState({
                items: []
            })
        }
    };


    render(){
        const { value } = this.props;
        const { items, selectItemIndex } = this.state;

        return <div ref={el => this.el = el} className="sberAutoComplete">
            <TextInput onChange={this.onChange} value={value} onKeyDown={this.keyUp} />
            <ItemList onSelect={this.onSelect} selectItemIndex={selectItemIndex} items={items} />
        </div>
    }
}

export default AutoComplete