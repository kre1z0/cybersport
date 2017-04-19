import React from 'react';
import { storiesOf } from '@kadira/storybook';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {theme} from '../assets/theme';

import Dropdown from '../components/dropdown';
import AutoCompleteInput from '../components/auto-complete-input';
import DatePicker from '../components/date-picker';
import SelectFieldInput from '../components/select-field';
import TextArea from '../components/text-area';

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
                    {id: 4, text: 'Иванченко'}
                ],
                selectId1: 1,
                selectId2: [1,2,3]
            };

            changeInput1 = (e) => {
                this.setState({
                    selectId1: e.id
                })
            };

            changeInput2 = (e) => {
                this.setState({
                    selectId2: e.map(el => el.id)
                })
            };

            render(){
                const { data, selectId1, selectId2 } = this.state;
                return <div>
                            <div style={{width: '300px', display: 'inline-block'}}>
                                <SelectFieldInput onChange={this.changeInput1} data={data} selectedId={selectId1} />
                            </div>
                            <div style={{width: '300px', display: 'inline-block'}}>
                                <SelectFieldInput onChange={this.changeInput2} multiple data={data} selectedId={selectId2} />
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
    .add('Text Area', () =>
        <div>
            <TextArea/>
        </div>
    );


