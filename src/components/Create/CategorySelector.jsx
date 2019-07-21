import React, { Component } from 'react';
import Ionicon from 'react-ionicons';
import PropTypes from 'prop-types';

class CategorySelector extends Component {
    render() {
        const { categories } = this.props;
        return (
            <div className="category-select-component">
                <div className="row">
                    {
                        categories.map((category, index) => {
                            return (
                                <div key={index} className="category-item">
                                    <Ionicon 
                                        className="rounded-circle"
                                        fontSize="50px"
                                        color="#555"
                                        icon={category.iconName}
                                    />
                                </div>
                            );
                        })
                    }
                </div>
            </div>
        );
    }
}

export default CategorySelector;