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
}
let props_with_item = {
  item: testItems[0],
  onFormSubmit: jest.fn(),
  onCancelSubmit: jest.fn(),
}
