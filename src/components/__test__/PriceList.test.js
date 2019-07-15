import React from 'react';
import { shallow } from 'enzyme'; // 用于测试展示型组件(只有props传入的值, 而没有state的组件)
import PriceList from '../PriceList';
import { items, categories } from '../Home';
import Ionicon from 'react-ionicons';

const itemWithCategory = items.map((item) => {
    item.category = categories[item.cid];
    return item;
});

const props = {
    items: itemWithCategory,
    onModifyItem: jest.fn(),
    onDeleteItem: jest.fn(),
};

let wrapper;
describe('test PriceList component', () => {
    // 运行每一个测试用例时都会执行此函数
    beforeEach(() => {
        wrapper = shallow(<PriceList {...props} />);
    });

    // 测试用例1: should render the component to match snapshot
    it('should render the component to match snapshot', () => {
        // snapshot test
        expect(wrapper).toMatchSnapshot()
    });

    // 测试用例2: should render correct price item lengths
    it('should render correct price item lengths', () => {
        expect(wrapper.find('.list-group-item').length).toEqual(itemWithCategory.length);
    });

    // 测试用例3: should render correct icon and price for each item
    it('should render correct icon and price for each item', () => {
        const iconList = wrapper.find('.list-group-item').first().find(Ionicon);
        expect(iconList.length).toEqual(3);
        expect(iconList.first().props().icon).toEqual(itemWithCategory[0].category.iconName);
    });

    // 测试用例4: should trigger the correct function callbacks
    it('should trigger the correct function callbacks', () => {
        const firstItem = wrapper.find('.list-group-item').first();
        firstItem.find('div').first().simulate('click');
        expect(props.onModifyItem).toHaveBeenCalledWith(itemWithCategory[0]);
        firstItem.find('div').last().simulate('click');
        expect(props.onDeleteItem).toHaveBeenCalledWith(itemWithCategory[0]);
    });
}); 