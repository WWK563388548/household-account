import React, { Component } from 'react';
import Ionicon from 'react-ionicons';
import PropTypes from 'prop-types';

class CategorySelector extends Component {

    constructor(props){
        super(props);

        this.state = {
            selectedCategoryId: props.selectedCategory && props.selectedCategory.id,
        };
    }

    selectCategory = (evt, category) => {
        this.setState({
            selectedCategoryId: category.id,
        });
        this.props.onSelectCategory(category);
        // 阻止默认行为
        evt.preventDefault();
    }

    render() {
        const { categories } = this.props;
        const { selectedCategoryId } = this.state;

        return (
            <div className="category-select-component">
                <div className="row">
                    {
                        categories.map((category, index) => {
                            const activeClassName = (selectedCategoryId === category.id) 
                                ? 'category-item col-3 active' : 'category-item col-3';
                            return (
                                <div 
                                    key={index} 
                                    onClick={(evt) => this.selectCategory(evt, category)}
                                    className={activeClassName}
                                >
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