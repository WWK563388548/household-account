import React from 'react';
import { shallow } from 'enzyme'; // 用于测试展示型组件(只有props传入的值, 而没有state的组件)
import TotalPrice from '../TotalPrice';

const props = {
    income: 1000,
    outcome: 2000,
};

describe('test TotalPrice component', () => {
    it('component should render correct income&outcome number', () => {
        const wrapper = shallow(<TotalPrice {...props} />);
        // * 1 是为了把字符串类型转换为数字类型
        expect(wrapper.find('.income span').text() * 1).toEqual(1000);
        expect(wrapper.find('.outcome span').text() * 1).toEqual(2000);
    });
});