import React, {Component} from 'react'
import PropTypes from 'prop-types'

class DatePicker extends Component {
    render() {
        const {year, month} = this.props;

        return (
            <div className="dropdown date-picker-component">
                <h4>选择日期</h4>
                <button className="btn btn-lg btn-secondary dropdown-toggle">
                    {`${year}年 ${month}月`}
                </button>
            </div>
        );
    }
}

export default DatePicker