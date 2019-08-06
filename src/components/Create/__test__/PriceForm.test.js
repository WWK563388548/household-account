import React from 'react'
import { mount } from 'enzyme'
import PriceForm from '../PriceForm'

const testItems = [    
    {
      "title": "buy stuff for kitten",
      "price": 100,
      "date": "2018-08-15",
      "monthCategory": "2018-8",
      "id": "_kly1klf4g",
      "cid": "1",
      "timestamp": 1534291200000
    },
    {
      "title": "这是我的工资",
      "price": 20000,
      "date": "2018-08-18",
      "monthCategory": "2018-8",
      "id": "_bd16bjeen",
      "cid": "2",
      "timestamp": 1534550400000
    },
    {
      "title": "和哥们一起喝酒",
      "price": 300,
      "date": "2018-08-20",
      "monthCategory": "2018-8",
      "id": "_jjfice21k",
      "cid": "3",
      "timestamp": 1534723200000
    },
    {
      "title": "理财收入",
      "price": 1000,
      "date": "2018-08-11",
      "monthCategory": "2018-8",
      "id": "_1fg1wme63",
      "cid": "11",
      "timestamp": 1533945600000
    },
    {
      "title": "理财收入",
      "price": 300,
      "date": "2018-11-15",
      "monthCategory": "2018-11",
      "id": "_qryggm5y8",
      "cid": "12",
      "timestamp": 1534291200000
    },
    {
      "title": "请别人吃饭",
      "price": 300,
      "date": "2018-11-15",
      "monthCategory": "2018-11",
      "id": "_qryggm511",
      "cid": "3",
      "timestamp": 1534291200000
    }
  ];

let props = {
  onFormSubmit: jest.fn(),
  onCancelSubmit: jest.fn(), 
};
let props_with_item = {
  item: testItems[0],
  onFormSubmit: jest.fn(),
  onCancelSubmit: jest.fn(),
};

let wrapper, formInstance, wrapper2
export const getInputValue = (selector, wrapper) => (
  wrapper.find(selector).instance().value
);
export const setInputValue = (selector, newValue, wrapper) => {
  wrapper.find(selector).instance().value = newValue
};
describe('test PriceForm component', () => {
  beforeEach(() => {
    wrapper = mount(<PriceForm {...props} />);
    wrapper2 = mount(<PriceForm {...props_with_item} />);
    formInstance = wrapper.find(PriceForm).instance();
  });
  it('should render the component to match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
    expect(wrapper2).toMatchSnapshot();
  });
  describe('test PriceForm with no item', () => {
    it('render PriceForm should generate three inputs and one form element', () => {
        expect(wrapper.find('input').length).toEqual(3);
        expect(wrapper.find('form').length).toEqual(1);
    });
    it('render PriceForm with no data should render three inputs and no value', () => {
        expect(getInputValue('#title', wrapper)).toEqual('');
        expect(getInputValue('#price', wrapper)).toEqual('');
        expect(getInputValue('#date', wrapper)).toEqual('');
    });
    it('submit form with empty input should show alert message', () => {
        wrapper.find('form').simulate('submit');
        expect(formInstance.state.validatePass).toEqual(false);
        expect(wrapper.find('.alert').length).toEqual(1);
        expect(props_with_item.onFormSubmit).not.toHaveBeenCalled();
      });
      it('submit form with invalid price should show alert message', () => {
        setInputValue('#title', 'test', wrapper);
        setInputValue('#price', '-20', wrapper);
        wrapper.find('form').simulate('submit');
        expect(formInstance.state.validatePass).toEqual(false);
      });
      it('click the cancel button should call the right callback', () => {
        wrapper.find('button').last().simulate('click');
        expect(props.onCancelSubmit).toHaveBeenCalled();
      });
  })
  describe('test PriceForm with item data', () => {
    it('render PriceForm with item should render the correct data to inputs', () => {
      expect(getInputValue('#title', wrapper2)).toEqual(testItems[0].title);
      expect(getInputValue('#price', wrapper2)).toEqual(testItems[0].price.toString());
      expect(getInputValue('#date', wrapper2)).toEqual(testItems[0].date);
    });
    it('submit with changed value, should trigger callback with right object', () => {
      setInputValue('#title', 'new title', wrapper2);
      setInputValue('#price', '200', wrapper2);
      wrapper2.find('form').simulate('submit');
      const newItem = { ...testItems[0], title: 'new title', price: 200 };
      expect(formInstance.state.validatePass).toEqual(true);
      expect(wrapper2.find('.alert').length).toEqual(0);
      expect(props_with_item.onFormSubmit).toHaveBeenCalledWith(newItem, true);
    });
  });
});
