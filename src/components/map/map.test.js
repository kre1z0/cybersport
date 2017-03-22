import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';
import Map from './index';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Map center={[0,0]} onCenterChange={()=>{}} onResetMap={()=>{}}/>, div);
});

it('render center coordinates', () => {
    const wrapper = mount(<Map center={[0,0]} onCenterChange={()=>{}} onResetMap={()=>{}}/>);
    expect(wrapper.find('span').text()).toEqual('[0][0]');
});
