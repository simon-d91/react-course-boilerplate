import React from 'react';
import { shallow } from 'enzyme';
import DasboardPage from '../../components/DashboardPage';

test('should render Dashboard page correctly', () => {
    const wrapper = shallow(<DasboardPage />);
    expect(wrapper).toMatchSnapshot();
})