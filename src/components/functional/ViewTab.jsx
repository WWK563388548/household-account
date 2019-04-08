import React from 'react';
import Ionicon from 'react-ionicons';
import PropTypes from 'prop-types';
/* eslint-disable */
const generateLinkClass = (current, view) => {
    return (current === view) ? 'nav-link active' : 'nav-link';
};

const ViewTab = ({activeTab, onTabChange}) => {
    return (
        <ul className="nav nav-tabs nav-fill my-4">
            <li className="nav-item">
                <a 
                    className={generateLinkClass(activeTab, 'list')} 
                    href="#"
                    onClick={(event) => {
                        event.preventDefault();
                        onTabChange('list');
                    }}
                >
                    <Ionicon
                        className="rounded-circle mr-2"
                        fontSize="25px"
                        color="#007bff"
                        icon="ios-paper"
                    />
                    列表模式
                </a>
            </li>
            <li className="nav-item">
                <a 
                    className={generateLinkClass(activeTab, 'chart')} 
                    href="#"
                    onClick={(event) => {
                        event.preventDefault();
                        onTabChange('chart');
                    }}
                >
                    <Ionicon
                        className="rounded-circle mr-2"
                        fontSize="25px"
                        color="#007bff"
                        icon="ios-pie"
                    />
                    图表分析模式
                </a>
            </li>           
        </ul>
    );
}
ViewTab.propTypes = {
    activeTab: PropTypes.string.isRequired,
    onTabChange: PropTypes.func.isRequired,
}

export default ViewTab;