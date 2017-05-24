import React, { Component } from 'react';
import PropTypes from 'prop-types';
import DatePicker from 'react-datepicker';
import cn from 'classnames';

import 'react-datepicker/dist/react-datepicker-cssmodules.css';
import './DateInput.scss';

class DateInput extends Component {
    static propTypes = {
        style: PropTypes.object,
        className: PropTypes.string,
        onChange: PropTypes.func,
    };

    render() {
        const { style, className, libProps } = this.props;
        return (
            <div style={style} className={cn('sberDateInput', className)}>
                <DatePicker
                    {...libProps}
                    locale="ru-ru"
                    calendarClassName="sberCalendar"
                />
            </div>
        );
    }
}

export default DateInput;
