import React, {Component} from 'react'
import PropTypes from 'prop-types'

class DatePicker extends Component {

    constructor(props){
        super(props);
        this.state = {
            isOpen: false,
            selectedYear: Number(this.props.year),
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

    selectYear = (event, yearNumber) => {
        event.preventDefault();
        this.setState({
            selectedYear: yearNumber,
        });
    }

    selectMonth = (event, monthNumber) => {
        event.preventDefault();
        this.setState({
            isOpen: false,
        });

        this.props.onChange(this.state.selectedYear, monthNumber);
    }

    render() {
        const {year, month} = this.props;
        const {isOpen, selectedYear} = this.state;
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
                                    <a 
                                        href="#" 
                                        onClick={(event) => {this.selectYear(event, yearNumber)}}
                                        key={index} 
                                        className={(yearNumber === selectedYear) ? "dropdown-item active" : "dropdown-item"}
                                    >
                                            {yearNumber} 年
                                    </a>
                                )}
                            </div>
                            <div className="col">
                                {monthRange.map((monthNumber, index) => 
                                    <a 
                                        href="#" 
                                        onClick={(event) => {this.selectMonth(event, monthNumber)}}
                                        key={index} 
                                        className={(monthNumber === Number(month)) ? "dropdown-item active" : "dropdown-item"}
                                    >
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

DatePicker.propTypes = {
    year: PropTypes.string.isRequired,
    month: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
}

export default DatePicker