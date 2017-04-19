import React from 'react';
import { storiesOf } from '@kadira/storybook';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {theme} from '../assets/theme';

import Dropdown from '../components/dropdown';
import AutoCompleteInput from '../components/auto-complete-input';
import DatePicker from '../components/date-picker';
import SelectFieldInput from '../components/select-field';
import TextInput from '../components/text-input';

const fields = ['Иванов', 'Петров', 'Иванченко'];

const data = [
    {id: 1, text: 'Иванов'},
    {id: 2, text: 'Петров'},
    {id: 3, text: 'Сидоров'},
    {id: 4, text: 'Иванченко'}
];

storiesOf('Inputs',  Dropdown)
    .addDecorator((story) => (
        <MuiThemeProvider muiTheme={theme}>
            {story()}
        </MuiThemeProvider>
    ))
    .add('AutoComplete input', () =>
        <div>
            <AutoCompleteInput onChange={(e) => {console.log(e)}} data={fields} />
            <AutoCompleteInput value="Ива" data={fields} />
        </div>
    )
    .add('SelectInput input', () => {

        class WrapperSelectFieldInput extends React.Component {
            state = {
                data: [
                    {id: 1, text: 'Иванов'},
                    {id: 2, text: 'Петров'},
                    {id: 3, text: 'Сидоров'},
                    {id: 4, text: 'Иванченко'},
                    {id: 12, text: 'Петров'},
                    {id: 13, text: 'Сидоров'},
                    {id: 14, text: 'Иванченко'},
                    {id: 22, text: 'Петров'},
                    {id: 23, text: 'Сидоров'},
                    {id: 24, text: 'Иванченко'},
                    {id: 32, text: 'Петров'},
                    {id: 33, text: 'Сидоров'},
                    {id: 34, text: 'Иванченко'},
                    {id: 42, text: 'Петров'},
                    {id: 53, text: 'Сидоров'},
                    {id: 64, text: 'Иванченко'}
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
                                <SelectFieldInput onChange={this.changeInput1} data={data} value={value1} />
                            </div>
                            <div style={{width: '300px', display: 'inline-block'}}>
                                <SelectFieldInput onChange={this.changeInput2} multiple data={data} value={value2} />
                            </div>
                        </div>
            }
        }

        return (
            <WrapperSelectFieldInput/>
        )
    })
    .add('DatePicker input', () =>
        <div>
            <DatePicker />
            <DatePicker onChange={(date) => { console.log(date)}} />
            <DatePicker value={new Date(2017, 6, 5)} />
        </div>
    )
    .add('Text Area', () => {

        class WrappedTextInput extends React.Component {
            state = {
                value1: '',
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
                        <br/>
                        <div style={{width: '300px', display: 'inline-block'}}>
                            <TextInput value={value2} multiLine onChange={this.handlerChange2} />
                        </div>
                    </div>
                )
            }
        }

        return <WrappedTextInput />
    }
    );


