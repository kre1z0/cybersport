import React from 'react';
import ReactDOM from 'react-dom';
import { render, mount } from 'enzyme';
import toJson from 'enzyme-to-json';

import Map from '../../components/map';

const props = {
    center: [0, 0],
    resolution: 76.437,
};

describe('map component', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Map {...props} />, div);
    });

    it('should mount map correctly', () => {
        const wrapper = mount(<Map {...props} />);
        expect(toJson(wrapper)).toMatchSnapshot();
    });

    it('should render map correctly', () => {
        const wrapper = render(<Map {...props} />);
        expect(toJson(wrapper)).toMatchSnapshot();
    });
});
