import React, {Component} from 'react'
import PropTypes from 'prop-types'

class DatePicker extends Component {

    constructor(props){
        super(props);
        this.state = {
            isOpen: false,
        };
    }

    toggleDropdown = (event) => {
        event.preventDefault();
        this.setState({
            isOpen: !this.state.isOpen,
        });
    }

    render() {
        const {year, month} = this.props;
        const {isOpen} = this.state;

        return (
            <div className="dropdown date-picker-component">
                <h4>选择日期</h4>
                <button 
                    className="btn btn-lg btn-secondary dropdown-toggle"
                    onClick={this.toggleDropdown}
                >
                    {`${year}年 ${month}月`}
                </button>
                {isOpen && 
                    <div className="dropdown-menu" style={{display: "block"}}>
                        <h1>Menu</h1>
                    </div>
                }
            </div>
        );
    }
}

export default DatePicker