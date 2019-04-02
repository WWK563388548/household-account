import React from 'react';
import Ionicon from 'react-ionicons';
import PropTypes from 'prop-types';

const ViewTab = ({activeTab, onTabChange}) => {
    return (
        <ul class="nav nav-tabs nav-fill my-4">
            <li class="nav-item">
                <a class="nav-link active" href="#">列表模式</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">图表分析模式</a>
            </li>           
        </ul>
    );
}

export default ViewTab;