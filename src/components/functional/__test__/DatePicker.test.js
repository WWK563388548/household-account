import React from 'react';
import { mount } from 'enzyme';
import DatePicker from '../DatePicker';
import { items } from '../../Home';

let props = {
    year: 2019,
    month: 8,
    onChange: jest.fn(),
}

let wrapper;
// 1. 测试默认状态：默认年和月是否正确，下拉框的显示等
describe('test DatePicker component', () => {
    beforeEach(() => {
        wrapper = mount(<DatePicker {...props} />);
    });
    it('should render the component to match the snapshot', () => {
        expect(wrapper).toMatchSnapshot();
    });
    it('render the correct year and month, show correct dropdown status', () => {
        const text = wrapper.find('.dropdown-toggle').first().text();
        expect(text).toEqual('2019年 08月');
        expect(wrapper.find('.dropdown-menu').length).toEqual(0);
        expect(wrapper.state('isOpen')).toEqual(false);
        expect(wrapper.state('selectedYear')).toEqual(props.year);
    });
});