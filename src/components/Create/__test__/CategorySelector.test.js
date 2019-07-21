import React from 'react';
import { mount } from 'enzyme';
import CategorySelector from '../CategorySelector';
import Ionicon from 'react-ionicons';

export const categories = [
    {
        "id": "1",
        "name": "旅行",
        "type": "outcome",
        "iconName": "ios-plane",
    },
    {
        "id": "2",
        "name": "理财",
        "type": "income",
        "iconName": "logo-yen",
    },
    {
        "id": "3",
        "name": "理财",
        "type": "income",
        "iconName": "logo-yen",
    }
];

let props = {
    categories,
    onSelectCategory: jest.fn(),
};