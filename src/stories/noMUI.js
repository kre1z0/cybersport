/**
 * Created by re on 15.05.2017.
 */
import React, { Component } from 'react';
import { storiesOf } from '@kadira/storybook';

import TextInput from '../components/noMUI/text-input';
import AutoComplete from '../components/noMUI/auto-complete';
import Select from '../components/noMUI/select';
import TextArea from '../components/noMUI/text-area';

storiesOf('noMUI', [TextInput, AutoComplete, Select, TextArea])
    .add('text input', () => {

        const ToggleSpan = ({value, editing, onEdit, onChange}) => editing
                                                    ? <TextInput className="big" focus value={value} onChange={onChange} onBlur={()=>{onEdit(false)}} />
                                                    : <span onClick={() => {onEdit(true)}}>{value}</span>;

        class TextInputDemo extends Component {

            state = {
                value: "Test value",
                toggleSpanEditing: false
            };

            onChange = (value) => {
                this.setState({
                    value
                })
            };

            onEdit = (status) => {
                this.setState({
                    toggleSpanEditing: status
                })
            };

            render(){
                const { value, toggleSpanEditing } = this.state;
                return <div>
                    <TextInput value={value} onChange={this.onChange} wrapperStyle={{display: "inline-block"}} />
                    <TextInput value={value} onChange={this.onChange} className="big" wrapperStyle={{display: "inline-block"}} />
                    <div>
                        <ToggleSpan value={value} editing={toggleSpanEditing} onEdit={this.onEdit} onChange={this.onChange} />
                    </div>
                </div>
            }
        }

        return <TextInputDemo/>
    })

    .add('auto complete', () => {

        const VALUES = [
            "Иванов",
            "Иванченко",
            "Сидоров",
            "Петров"
        ];

        class AutoCompleteDemo extends Component {
            state = {
                value: 'Ива'
            };

            onChange = (value) => {
                this.setState({
                    value
                })
            };

            render(){
                const { value } = this.state;

                return <div>
                    <AutoComplete onChange={this.onChange} values={VALUES} value={value} />
                </div>
            }
        }

        return <AutoCompleteDemo/>
    })

    .add('select', () => {
        class SelectDemo extends Component {
            state = {
                value: 'plan',
                value2: ['plan'],
                items: [
                    {
                        value: 'plan',
                        text: 'Плановый'
                    },
                    {
                        value: 'noPlan',
                        text: 'Не плановая'
                    },
                    {
                        value: 'name',
                        text: 'Именованная'
                    },
                    {
                        value: 'goverment',
                        text: 'Государственная'
                    }
                ]
            };

            change = (value) => {
                this.setState({
                    value
                })
            };

            change2 = (value2) => {
                this.setState({
                    value2
                })
            };

            render(){
                const { value, value2, items } = this.state;
                return <div>
                    <Select multi value={value2} items={items} onChange={this.change2} />
                    <div>
                        <Select value={value} items={items} onChange={this.change} />
                    </div>
                </div>
            }
        }

        return <SelectDemo/>
    })

    .add('text area', () => {
        class TextAreaDemo extends Component {
            render(){
                return <div>
                    <TextArea/>
                </div>
            }
        }

        return <TextAreaDemo/>
    });