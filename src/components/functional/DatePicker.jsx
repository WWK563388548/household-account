import React, {Component} from 'react'
import PropTypes from 'prop-types'

class DatePicker extends Component {

    constructor(props){
        super(props);
        this.state = {
            isOpen: false,
        };
    }

    range = (size, startAt) => {
        const arr = [];
        for (let i = 0; i < size; i++){
            arr[i] = startAt + i
        }
        return arr;
    }
    toggleDropdown = (event) => {
        event.preventDefault();
        this.setState({
            isOpen: !this.state.isOpen,
        });
    }

    padLeft = (num) => {
        return num < 10 ? '0' + num : num;
    } 

    render() {
        const {year, month} = this.props;
        const {isOpen} = this.state;
        const monthRange = this.range(12, 1);
        // console.log(monthRange);
        const yearRange = this.range(12, -4).map(item => item + Number(year));

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
                        <div className="row">
                            <div className="col border-right">
                                {yearRange.map((yearNumber, index) => 
                                    <a key={index} className="dropdown-item">
                                            {yearNumber} 年
                                    </a>
                                )}
                            </div>
                            <div className="col">
                                {monthRange.map((monthNumber, index) => 
                                    <a key={index} className="dropdown-item">
                                        {this.padLeft(monthNumber)} 月
                                    </a>
                                )}
                            </div>
                        </div>
                    </div>
                }
            </div>
        );
    }
}

export default DatePicker