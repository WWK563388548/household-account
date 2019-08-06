import React, { Component } from 'react';
import Ionicon from 'react-ionicons';
import PropTypes from 'prop-types';

const Colors = {
    blue: '#347eff',
    deepBlue: '#61dafb',
    green: '#28a745',
    red: '#dc3545',
    gray: '#555',
    lightGray: '#efefef',
    white: '#fff',
};

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
                            const iconColor = (category.id === selectedCategoryId) ? Colors.white : Colors.gray
                            const backColor = (category.id === selectedCategoryId) ? Colors.blue : Colors.lightGray
                            const activeClassName = (selectedCategoryId === category.id) 
                                ? 'category-item col-3 active' : 'category-item col-3';
                            return (
                                <div 
                                    key={index}
                                    role="button" 
                                    style={{ textAlign: 'center'}} 
                                    onClick={(evt) => this.selectCategory(evt, category)}
                                    className={activeClassName}
                                >
                                    <Ionicon 
                                        className="rounded-circle"
                                        style={{ backgroundColor: backColor, padding: '5px' }}
                                        fontSize="50px"
                                        color={iconColor}
                                        icon={category.iconName}
                                    />
                                    <p>{category.name}</p>
                                </div>
                            );
                        })
                    }
                </div>
            </div>
        );
    }
}

CategorySelector.propTypes = {
    categories: PropTypes.array.isRequired,
    selectedCategory: PropTypes.object,
    onSelectCategory: PropTypes.func.isRequired,
  }

export default CategorySelector;