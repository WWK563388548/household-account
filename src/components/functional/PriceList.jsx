import React from 'react';
import Ionicon from 'react-ionicons';
import PropTypes from 'prop-types';

// items are data
// onModifyItem and onDeleteItem is function
const PriceList = ({items, onModifyItem, onDeleteItem}) => {
    return (
        <ul className="list-group list-group-flush app-list">
            {
                items.map(item => (
                    <li 
                        className="list-group-item d-flex justify-content-between align-items-center"
                        key={item.id}
                    >
                        <span className="col-1">
                            <Ionicon
                                className="rounded-circle"
                                fontSize="30px"
                                style={{backgroundColor: "#007bff", padding: "5px"}}
                                color="#fff"
                                icon={item.category.iconName}
                            />
                        </span>
                        <span className="col-5">
                            {item.title}
                        </span>
                        <span className="col-2 font-weight-bold">
                            {item.category.type === "income" ? "+" : "-"}
                            {item.price}元
                        </span>
                        <span className="col-2">
                            {item.date}
                        </span>
                        <div
                            className="col-1"
                            onClick={() => onModifyItem(item)}
                        >   
                            <Ionicon
                                className="rounded-circle"
                                fontSize="30px"
                                style={{backgroundColor: "#28a745", padding: "5px"}}
                                color="#fff"
                                icon="ios-create-outline"
                            />
                        </div>
                        <div 
                            className="col-1"
                            onClick={() => onDeleteItem(item)}
                        >
                            <Ionicon
                                className="rounded-circle"
                                fontSize="30px"
                                style={{backgroundColor: "#dc3545", padding: "5px"}}
                                color="#fff"
                                icon="ios-close"
                            />
                        </div>
                    </li>
                ))
            }
        </ul>
    );
}
PriceList.propTypes = {
    items: PropTypes.array.isRequired,
    onModifyItem: PropTypes.func.isRequired,
    onDeleteItem: PropTypes.func.isRequired,
}

export default PriceList;