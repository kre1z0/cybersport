import React from 'react';
import { storiesOf } from '@kadira/storybook';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {theme} from '../assets/theme';

import Dropdown from '../components/dropdown';
import AutoCompleteInput from '../components/auto-complete-input';
import DatePicker from '../components/date-picker';
import SelectFieldInput from '../components/select-field';
import TextInput from '../components/text-input';

storiesOf('Inputs',  Dropdown)
    .addDecorator((story) => (
        <MuiThemeProvider muiTheme={theme}>
            {story()}
        </MuiThemeProvider>
    ))
    .add('AutoComplete input', () => {
            class WrapperAutoComplete extends React.Component {
                state = {
                    data: [ 'Иванов', 'Петров', 'ИванченкоИванченкоИванченкоИванченкоИванченкоИванченкоИванченкоИванченко','Иванов', 'Петров', 'Иванченко','Иванов', 'Петров', 'Иванченко','Иванов', 'Петров', 'Иванченко','Иванов', 'Петров', 'Иванченко',  ],
                    value: 'Ива'
                };

                changeComplete = (value) => {
                    this.setState({
                        value
                    })
                };

                render(){
                    const { data, value } = this.state;
                    return (
                        <div>
                            <AutoCompleteInput onChange={this.changeComplete} value={value} data={data} />
                            <AutoCompleteInput value={value} data={data} />
                            <AutoCompleteInput
                                style={{height: "58px", backgroundColor: 'green'}}
                                menuStyle={{boxShadow: '0 0 10px red'}}
                                listStyle={{backgroundColor: 'yellow'}}
                                itemStyle={{cursor: 'help'}}
                                value={value}
                                onChange={this.changeComplete}
                                focusOnMount
                                onBlur={()=>{console.log('unfocused')}}
                                data={data}/>
                        </div>
                    )
                }
            }

            return <WrapperAutoComplete/>;
        }

    )
    .add('SelectInput input', () => {

        class WrapperSelectFieldInput extends React.Component {
            state = {
                data: [
                    {id: 1, text: 'ИвановИвановИвановИвановИвановИвановИвановИвановИвановИвановИванов'},
                    {id: 2, text: 'Петров'},
                    {id: 3, text: 'Сидоров'}
                ],
                value1: 1,
                value2: [1,2,3]
            };

            changeInput1 = (e) => {
                this.setState({
                    value1: e.id
                })
            };

            changeInput2 = (e) => {
                this.setState({
                    value2: e.map(el => el.id)
                })
            };

            render(){
                const { data, value1, value2 } = this.state;
                return <div>
                            <div style={{width: '300px', display: 'inline-block'}}>
                                <SelectFieldInput />
                            </div>
                            <div style={{width: '300px', display: 'inline-block'}}>
                                <SelectFieldInput onChange={this.changeInput1} data={data} value={value1} />
                            </div>
                            <div style={{width: '300px', display: 'inline-block'}}>
                                <SelectFieldInput
                                    style={{height: '58px'}}
                                    itemStyle={{backgroundColor: 'red', color: 'yellow'}}
                                    onChange={this.changeInput2}
                                    multiple
                                    data={data}
                                    maxHeight={100}
                                    focusOnMount
                                    onBlur={()=>{console.log('unfocused')}}
                                    value={value2} />
                            </div>
                        </div>
            }
        }

        return (
            <WrapperSelectFieldInput/>
        )
    })
    .add('DatePicker input', () => {
        class WrapperDatePicker extends React.Component {
            state = {
                value2: null,
                value3: new Date(2017, 6, 5)
            };

            changeInput2 = (value) => {
                this.setState({
                    value2: value
                })
            };

            changeInput3 = (value) => {
                this.setState({
                    value3: value
                })
            };

            render(){
                const { value2, value3 } = this.state;

                return (
                    <div>
                        <DatePicker onChange={this.changeInput2} value={value2} />
                        <DatePicker onChange={this.changeInput3} value={value3} />
                        <DatePicker
                            disabled
                            onChange={this.changeInput3}
                            value={value3} />
                        <DatePicker
                            style={{backgroundColor: 'red'}}
                            calendarStyle={{boxShadow: '0 0 10px green'}}
                            inputStyle={{height: '58px'}}
                            onChange={this.changeInput3}
                            value={value3} />
                    </div>
                )
            }
        }

        return <WrapperDatePicker />
    }

    )
    .add('Text Area', () => {

        class WrappedTextInput extends React.Component {
            state = {
                value1: '1',
                value2: ''
            };

            handlerChange1 = (val) => {
                this.setState({
                    value1: val
                })
            };

            handlerChange2 = (val) => {
                this.setState({
                    value2: val
                })
            };

            render(){
                const { value1, value2 } = this.state;

                return (
                    <div>
                        <div style={{width: '300px', display: 'inline-block'}}>
                            <TextInput value={value1} onChange={this.handlerChange1} />
                        </div>
                        <div style={{width: '300px', display: 'inline-block'}}>
                            <TextInput
                                value={value1}
                                style={{
                                    backgroundColor: 'green'
                                }}
                                inputStyle={{
                                    color: 'yellow'
                                }}
                                onChange={this.handlerChange1} />
                        </div>
                        <br/>
                        <div style={{width: '300px', display: 'inline-block'}}>
                            <TextInput value={value2} multiLine onChange={this.handlerChange2} />
                        </div>
                        <div style={{width: '300px', display: 'inline-block'}}>
                            <TextInput
                                style={{
                                    backgroundColor: 'red'
                                }}
                                textAreaStyle={{
                                    color: 'blue'
                                }}
                                focusOnMount
                                onBlur={()=>{console.log('unfocused')}}
                                value={value2}
                                multiLine
                                onChange={this.handlerChange2} />
                        </div>
                    </div>
                )
            }
        }

        return <WrappedTextInput />
    }
    );


