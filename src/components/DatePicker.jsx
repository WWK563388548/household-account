import React, {Component} from 'react'
import PropTypes from 'prop-types'
/* eslint-disable */
class DatePicker extends Component {

    constructor(props){
        super(props);
        this.state = {
            isOpen: false,
            selectedYear: this.props.year
        };
    }

    componentDidMount(){
        // false是冒泡(默认), true是capture
        document.addEventListener('click', this.handleClick, false);
    }

    componentWillUnmount(){
        // 组件Unmount时移除listener
        document.removeEventListener('click', this.handleClick, false);
    }

    handleClick = (event) => {
        if(this.node.contains(event.target)){
            return;
        }
        this.setState({
            isOpen: false,
        });
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
        const yearRange = this.range(12, -4).map(item => item + year);

        return (
            <div 
            style={{width: "60%"}}
            className="dropdown date-picker-component" 
            // 使用ref获取dom节点
            ref={(ref) => this.node = ref} >
                <span style={{fontSize: "1.5em", marginRight: "10px"}}>选择日期</span>
                <button
                    className="btn btn-lg btn-secondary dropdown-toggle"
                    onClick={this.toggleDropdown}
                    style={{borderColor: "#fff", backgroundColor: "#03A9F4"}}
                >
                    {`${year}年 ${this.padLeft(month)}月`}
                </button>
                {isOpen && 
                    <div className="dropdown-menu" style={{display: "block"}}>
                        <div className="row">
                            <div className="col border-right years-range">
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
                            <div className="col months-range">
                                {monthRange.map((monthNumber, index) => 
                                    <a 
                                        href="#" 
                                        onClick={(event) => {this.selectMonth(event, monthNumber)}}
                                        key={index} 
                                        className={(monthNumber === month) ? "dropdown-item active" : "dropdown-item"}
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
    onChange: PropTypes.func.isRequired,
}

export default DatePicker